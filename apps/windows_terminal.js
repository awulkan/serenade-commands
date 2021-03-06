const APP = require("../constants/apps.js");
const KEY = require("../constants/keys.js");

// Panes
serenade.app(APP.TERMINAL).key("close pane", "w", [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("previous pane", KEY.LEFT, [KEY.CONTROL, KEY.ALT]);
serenade.app(APP.TERMINAL).key("duplicate pane", "d", [KEY.ALT, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("split pane horizontal", "-", [KEY.ALT, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("split pane vertical", "+", [KEY.ALT, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("resize pane right", KEY.RIGHT, [KEY.ALT, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("resize pane left", KEY.LEFT, [KEY.ALT, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("resize pane down", KEY.DOWN, [KEY.ALT, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("resize pane up", KEY.UP, [KEY.ALT, KEY.SHIFT]);

// Tabs
serenade.app(APP.TERMINAL).key("new tab", "t", [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("new tab dropdown", KEY.SPACE, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("close tab", KEY.F4, [KEY.CONTROL]); // Doesn't work.
serenade.app(APP.TERMINAL).key("close", KEY.F4, [KEY.CONTROL]); // Doesn't work.
serenade.app(APP.TERMINAL).key("next tab", KEY.TAB, [KEY.CONTROL]);
serenade.app(APP.TERMINAL).key("right tab", KEY.TAB, [KEY.CONTROL]);
serenade.app(APP.TERMINAL).key("previous tab", KEY.TAB, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("left tab", KEY.TAB, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("duplicate tab", "d", [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).command("tab <%num%>", async (api, matches) => {
  if (!parseInt(matches.num)) { return; }
  await api.pressKey(matches.num, [KEY.CONTROL, KEY.ALT]);
});
serenade.app(APP.TERMINAL).command("tab profile <%num%>", async (api, matches) => {
  if (!parseInt(matches.num)) { return; }
  await api.pressKey(num, [KEY.CONTROL, KEY.SHIFT]);
});

// Scroll
serenade.app(APP.TERMINAL).key("scroll down", KEY.DOWN, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("scroll up", KEY.UP, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("page up", KEY.PAGE_UP, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("page down", KEY.PAGE_DOWN, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("go top", KEY.HOME, [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("go bottom", KEY.END, [KEY.CONTROL, KEY.SHIFT]);

// Windows
serenade.app(APP.TERMINAL).key("new window", "n", [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.TERMINAL).key("close window", KEY.F4, [KEY.ALT]);
serenade.app(APP.TERMINAL).key("quake window", "??", [KEY.WINDOWS, KEY.SHIFT]);

// Settings
serenade.app(APP.TERMINAL).key("open settings", ",", [KEY.CONTROL]);
serenade.app(APP.TERMINAL).key("open settings file", ",", [KEY.CONTROL, KEY.SHIFT]);

// Text
serenade.app(APP.TERMINAL).key("copy text", "c", [KEY.CONTROL]);
serenade.app(APP.TERMINAL).key("paste text", "v", [KEY.CONTROL]);

// Font
serenade.app(APP.TERMINAL).key("decrease font size", "-", [KEY.CONTROL]);
serenade.app(APP.TERMINAL).key("increase font size", "+", [KEY.CONTROL]);
serenade.app(APP.TERMINAL).key("reset font size", "0", [KEY.CONTROL]);

// Search
serenade.app(APP.TERMINAL).key("find", "f", [KEY.CONTROL, KEY.SHIFT]);

// Focus
serenade.app(APP.TERMINAL).key("move focus down", KEY.DOWN, [KEY.ALT]);
serenade.app(APP.TERMINAL).key("move focus up", KEY.UP, [KEY.ALT]);
serenade.app(APP.TERMINAL).key("move focus left", KEY.LEFT, [KEY.ALT]);
serenade.app(APP.TERMINAL).key("move focus right", KEY.RIGHT, [KEY.ALT]);

// Toggles
serenade.app(APP.TERMINAL).key("full screen", KEY.F11);
serenade.app(APP.TERMINAL).key("command palette", "p", [KEY.CTRL, KEY.SHIFT]);
