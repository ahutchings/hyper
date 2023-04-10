const which = require("which");
const { decorateConfig } = require("../");

jest.mock("which");
jest.spyOn(console, "warn").mockImplementation();

describe("decorateConfig", () => {
  it("decorates the config", () => {
    const actual = decorateConfig({});

    expect(actual).toMatchInlineSnapshot(`
      {
        "backgroundColor": "rgba(27, 43, 52, 0.95)",
        "borderColor": "#343d46",
        "colors": {
          "black": "#1b2b34",
          "blue": "#6699cc",
          "cyan": "#5fb3b3",
          "green": "#99c794",
          "lightBlack": "#4f5b66",
          "lightBlue": "#6699cc",
          "lightCyan": "#5fb3b3",
          "lightGreen": "#99c794",
          "lightMagenta": "#c594c5",
          "lightRed": "#ec5f67",
          "lightWhite": "#d8dee9",
          "lightYellow": "#fac863",
          "magenta": "#c594c5",
          "red": "#ec5f67",
          "white": "#a7adba",
          "yellow": "#fac863",
        },
        "css": "
              
              .tab_tab:before {
                  border-left: 1px solid;
              }
              .tab_active {
                  color: #fac863
              }
          ",
        "cursorAccentColor": "#1b2b34",
        "cursorColor": "#d8dee9",
        "fontFamily": ""Fira Code", Menlo, "DejaVu Sans Mono", "Lucida Console", monospace",
        "foregroundColor": "#d8dee9",
        "selectionColor": "rgba(216, 222, 233,0.3)",
        "shell": undefined,
        "termCSS": "
            x-screen x-row {
                font-variant-ligatures: initial;
            }
        ",
      }
    `);
  });

  it("finds fish shell", () => {
    which.sync.mockImplementation((cmd) => {
      if (cmd === "fish") return "/opt/homebrew/bin/fish";
    });

    const actual = decorateConfig({});

    expect(actual).toHaveProperty("shell", "/opt/homebrew/bin/fish");
  });

  it("falls back to bash shell", () => {
    which.sync.mockImplementation((cmd) => {
      if (cmd === "fish") throw new Error();
      if (cmd === "bash") return "/bin/bash";
    });

    const actual = decorateConfig({});

    expect(actual).toHaveProperty("shell", "/bin/bash");
    expect(console.warn).toHaveBeenCalledWith(
      `Fish shell not found in path. Falling back to bash shell.`
    );
  });
});
