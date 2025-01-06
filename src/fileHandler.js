const fs = require("fs");
const path = require("path");
const { transformCode } = require("./transformer");

function readAndTransformFile(filePath) {
  // checking if file have correct extension format
  if (path.extname(filePath) !== ".kocha") {
    throw new Error("Aqilli manga faqat .kocha faylla kere");
  }

  // Reading file
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Compile KochaScript to normal JavaScript
  return transformCode(fileContent); // Compiling to normal Js
}

module.exports = { readAndTransformFile };
