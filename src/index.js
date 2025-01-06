#!/usr/bin/env node

const { readAndTransformFile } = require("./fileHandler");
const path = require("path");
const fs = require("fs");
const chokidar = require("chokidar");

const filePath = process.argv[2]; // filepath
const watch = process.argv.includes("-w") || process.argv.includes("--watch"); // watch
const help = process.argv.includes("-h") || process.argv.includes("--help"); // help

if (!filePath) {
  console.error("Aqilli file qani");
  process.exit(1);
}

function compileFile(filePath) {
  try {
    const transformedCode = readAndTransformFile(filePath);

    // create new js file with the same name as .kochafile
    const outputFilePath = path.join(
      path.dirname(filePath),
      path.basename(filePath, path.extname(filePath)) + ".js"
    );

    // Write code to new .js file
    fs.writeFileSync(outputFilePath, transformedCode, "utf-8");

    console.log(`Fayl tayyor: ${outputFilePath}`);
  } catch (error) {
    console.error("Obbo oxshamadi!: ", error.message);
  }
}

// if -w or --watch we use chokidar to watch file
if (watch) {
  const watcher = chokidar.watch(filePath, {
    persistent: true,
    ignoreInitial: true, // Ignore initial event
  });

  watcher.on("change", (changedPath) => {
    console.log(`Fayl ozgardi: ${changedPath}`);
    compileFile(changedPath); // Compile file
  });

  console.log(`Yeglama ozim ${filePath} faylli ozgartirib turaman...`);
} else {
  // if theres no watch we just compile file 1 tim
  compileFile(filePath);
}
