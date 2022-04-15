const arr = [
  ".babel.js",
  ".babel.ts",
  ".buble.js",
  ".cirru",
  ".cjsx",
  ".co",
  ".coffee",
  ".coffee.md",
  ".csv",
  ".eg",
  ".esm.js",
  ".iced",
  ".iced.md",
  ".ini",
  ".js",
  ".json",
  ".json5",
  ".jsx",
  ".litcoffee",
  ".liticed",
  ".ls",
  ".mjs",
  ".node",
  ".toml",
  ".ts",
  ".tsx",
  ".wisp",
  ".xml",
  ".yaml",
  ".yml",
];

// 做一个排序操作
const extensions = arr.sort(function (a, b) {
  console.log("a:b:", a, b);
  return a === ".js" ? -1 : b === ".js" ? 1 : a.length - b.length;
});
console.log("extensions:", extensions);
