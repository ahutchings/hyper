const { decorateConfig } = require("../");

describe("decorateConfig", () => {
  beforeEach(() => {
    console.warn = jest.fn();
  });

  it("should make the backgroundColor transparent", () => {
    const actual = decorateConfig({
      backgroundColor: "#1b2b34",
    }).backgroundColor;
    expect(actual).toEqual("rgba(27, 43, 52, 0.85)");
  });
});
