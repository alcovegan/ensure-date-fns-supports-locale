const lib = require("./");

test("lib returns a function", () => {
  expect(typeof lib).toBe("function");
});

test("lib working correctly when passed single locale", () => {
  expect(lib("ru")).toBe(true);
  expect(lib("en")).toBe(true);
  expect(lib("eo")).toBe(true);
  expect(lib("nb")).toBe(true);
  expect(lib("zh_tw")).toBe(true);
  expect(lib("zzz")).toBe(false);
  expect(lib("af")).toBe(false);
});

test("lib working correctly when passed array of locales", () => {
  expect(lib(["ru", "en", "eo"])).toBe(true);
  expect(lib(["nb", "zh_tw"])).toBe(true);
  expect(lib(["ko"])).toBe(true);
  expect(lib(["zzz", "en", "ru"])).toBe(false);
  expect(lib(["zzz"])).toBe(false);
});
