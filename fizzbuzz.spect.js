const fizzBuzz = require("./index.js");
const { expect } = require("chai");

describe("fizzBuzz", () => {
  it("test avec 15", () => {
    expect(fizzBuzz(15)).to.equal("FizzBuzz");
  });
  it("test avec 3", () => {
    expect(fizzBuzz(3)).to.equal("Fizz");
  });
  it("test avec 5", () => {
    expect(fizzBuzz(5)).to.equal("Buzz");
  });
  it("test avec 4", () => {
    expect(fizzBuzz(4)).to.equal(4);
  });
});
