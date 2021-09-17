const APP = require('../constants/apps.js');
const KEY = require('../constants/keys.js');

// Show explorer tab.
serenade.app(APP.VS_CODE).key("show explorer", "e", [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.VS_CODE).key("show files", "e", [KEY.CONTROL, KEY.SHIFT]);

// Show search tab.
serenade.app(APP.VS_CODE).key("show search", "f", [KEY.CONTROL, KEY.SHIFT]);

// Show version control tab.
serenade.app(APP.VS_CODE).command(
  "show git",
  async (api, matches) => {
    await api.pressKey("g", [KEY.CONTROL, KEY.SHIFT]);
    await api.pressKey("g");
  }
);
serenade.app(APP.VS_CODE).command(
  "show version control",
  async (api, matches) => {
    await api.pressKey("g", [KEY.CONTROL, KEY.SHIFT]);
    await api.pressKey("g");
  }
);


// Show debug tab.
serenade.app(APP.VS_CODE).key("show debug", "d", [KEY.CONTROL, KEY.SHIFT]);

// Show debug tab.
serenade.app(APP.VS_CODE).key("show extensions", "x", [KEY.CONTROL, KEY.SHIFT]);

// Show intellisense options.
serenade.app(APP.VS_CODE).key("show fixes", ".", [KEY.CONTROL]);

// Show intellisense options.
serenade.app(APP.VS_CODE).key("fixes", ".", [KEY.CONTROL]);

// Show info. Navigate with up/down.
serenade.app(APP.VS_CODE).key("show options", KEY.SPACE, [KEY.CONTROL]);

// Peek problems.
serenade.app(APP.VS_CODE).key("show problem", KEY.F8, [KEY.ALT]);

// Peek problems. Just another option to press escape.
serenade.app(APP.VS_CODE).key("hide problem", KEY.ESC);

// Close all tabs.
serenade.app(APP.VS_CODE).command(
  "close all tabs",
  async (api, matches) => {
    await api.pressKey("k", [KEY.CONTROL]);
    await api.pressKey("w");
  }
);

// Close saved tabs.
serenade.app(APP.VS_CODE).command(
  "close saved tabs",
  async (api, matches) => {
    await api.pressKey("k", [KEY.CONTROL]);
    await api.pressKey("u");
  }
);

// New terminal.
serenade.app(APP.VS_CODE).key("new terminal", "ö", [KEY.CONTROL, KEY.SHIFT]);

// Toggle terminal.
serenade.app(APP.VS_CODE).key("toggle terminal", "ö", [KEY.CONTROL]);


// // Split terminal.
// serenade.app(APP.VS_CODE).command(
//   "split terminal",
//   async (api, matches) => {
//     await api.pressKey("5", [KEY.CONTROL, KEY.SHIFT]);
//   }
// );

// // Left terminal.
// serenade.app(APP.VS_CODE).command(
//   "left terminal",
//   async (api, matches) => {
//     await api.pressKey(KEY.LEFT, [KEY.ALT]);
//   }
// );

// // Right terminal.
// serenade.app(APP.VS_CODE).command(
//   "right terminal",
//   async (api, matches) => {
//     await api.pressKey(KEY.RIGHT, [KEY.ALT]);
//   }
// );
