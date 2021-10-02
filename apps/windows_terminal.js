const APP = require("../constants/apps.js");
const KEY = require("../constants/keys.js");

const wordToNumber = {
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
}

// Panes
serenade.app(APP.WIN_TERMINAL).key("close pane", "w", [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.WIN_TERMINAL).key("previous pane", KEY.LEFT, [KEY.CONTROL, KEY.ALT]);
serenade.app(APP.WIN_TERMINAL).key("duplicate pane", "d", [KEY.ALT, KEY.SHIFT]);

// Tabs
serenade.app(APP.WIN_TERMINAL).key("new tab", "t", [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.WIN_TERMINAL).key("next tab", KEY.TAB, [KEY.CONTROL]);
serenade.app(APP.WIN_TERMINAL).key("right tab", KEY.TAB, [KEY.CONTROL]);
serenade.app(APP.WIN_TERMINAL).key("previous tab", KEY.TAB, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.WIN_TERMINAL).key("left tab", KEY.TAB, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.WIN_TERMINAL).key("duplicate tab", "d", [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.WIN_TERMINAL).command("tab <%num%>", async (api, matches) => {
  const num = wordToNumber[matches.num];
  if (!num) { return; }
  await api.pressKey(num, [KEY.CONTROL, KEY.ALT]);
});
serenade.app(APP.WIN_TERMINAL).command("tab profile <%num%>", async (api, matches) => {
  const num = wordToNumber[matches.num];
  if (!num) { return; }
  await api.pressKey(num, [KEY.CONTROL, KEY.SHIFT]);
});

// Scroll
serenade.app(APP.WIN_TERMINAL).key("scroll down", KEY.DOWN, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.WIN_TERMINAL).key("scroll up", KEY.UP, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.WIN_TERMINAL).key("page up", KEY.PAGE_UP, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.WIN_TERMINAL).key("page down", KEY.PAGE_DOWN, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.WIN_TERMINAL).key("go top", KEY.HOME, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.WIN_TERMINAL).key("go bottom", KEY.END, [KEY.CONTROL, KEY.SHIFT]);

// Windows
serenade.app(APP.WIN_TERMINAL).key("new window", "n", [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.WIN_TERMINAL).key("close window", KEY.F4, [KEY.ALT]);

// Text
serenade.app(APP.WIN_TERMINAL).key("copy text", "c", [KEY.CONTROL]);
serenade.app(APP.WIN_TERMINAL).key("paste text", "v", [KEY.CONTROL]);

// Font
serenade.app(APP.WIN_TERMINAL).key("decrease font size", "-", [KEY.CONTROL]);
serenade.app(APP.WIN_TERMINAL).key("increase font size", "+", [KEY.CONTROL]);
serenade.app(APP.WIN_TERMINAL).key("reset font size", "0", [KEY.CONTROL]);

// Search
serenade.app(APP.WIN_TERMINAL).key("find", "f", [KEY.CONTROL, KEY.SHIFT]);

// Focus
serenade.app(APP.WIN_TERMINAL).key("move focus down", KEY.DOWN, [KEY.ALT]);
serenade.app(APP.WIN_TERMINAL).key("move focus up", KEY.UP, [KEY.ALT]);
serenade.app(APP.WIN_TERMINAL).key("move focus left", KEY.LEFT, [KEY.ALT]);
serenade.app(APP.WIN_TERMINAL).key("move focus right", KEY.RIGHT, [KEY.ALT]);

// Toggles
serenade.app(APP.WIN_TERMINAL).key("toggle full screen", KEY.F11);
serenade.app(APP.WIN_TERMINAL).key("toggle command palette", "p", [KEY.CTRL, KEY.SHIFT]);
