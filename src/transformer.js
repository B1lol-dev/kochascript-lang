// Replace .js with .kocha syntax
function transformCode(code) {
  const replacements = {
    aylana: "for",
    agar: "if",
    bomasa: "else",
    yanami: "function",
    choz: "return",
    davay: "let",
    sotmas: "const",
    sotqin: "var",
    class: "class",
    yengi: "new",
    shu: "this",
    urun: "try",
    oxshamasa: "catch",
    vanihoyat: "finally",
    ot: "throw",
    davomEt: "continue",
    toxta: "break",
    almashuvchi: "switch",
    holat: "case",
    oddiy: "default",
    ichida: "in",
    instanceof: "instanceof",
    typeof: "typeof",
    bosh: "void",
    ochir: "delete",
    debugger: "debugger",
    birgalida: "async",
    kutbtur: "await",
    yield: "yield",
    puper: "super",
    opke: "import",
    obor: "export",
    dan: "from",
    niki: "of",
    boshKalla: "null",
    qattau: "undefined",
    Sonmas: "NaN",
    cheksizli: "Infinity",
    ha: "true",
    yoq: "false",
    qachonki: "while",
    korsat: "console.log",
    ogohlantr: "console.warn",
    xato: "console.error",
    ot: "throw",
    Xato: "Error",
    uzunli: "length",
    xarBittasiga: "forEach",
    qil: "do",
    karochiKut: "setTimeout",
    karochiQaytar: "setInterval",
    Vada: "Promise",
    // coming soon...
  };

  // transform code using replacements
  let transformedCode = code;
  for (const [oldWord, newWord] of Object.entries(replacements)) {
    const regex = new RegExp(`\\b${oldWord}\\b`, "g");
    transformedCode = transformedCode.replace(regex, newWord);
  }

  return transformedCode;
}

module.exports = { transformCode };
