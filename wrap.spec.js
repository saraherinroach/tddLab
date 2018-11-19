const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("Returns a string without line breaks if length is less than maxlength", () => {
    expect(wrap("abcde fgh ijkl", 20)).to.equal("abcde fgh ijkl");
  });
  it("Returns a string with no more than maxlength characters per line", () => {
    expect(wrap("abcde fgh ijkl", 10)).to.equal("abcde fgh\nijkl");
  });
});
