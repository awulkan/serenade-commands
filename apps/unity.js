const APP = require('../constants/apps.js');
const KEY = require('../constants/keys.js');

// Plat Mode Controls
serenade.app(APP.UNITY).key("play", "p", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("stop", "p", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("pause", "p", [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.UNITY).key("step", "p", [KEY.CONTROL, KEY.ALT]);

// Editor Navigation
serenade.app(APP.UNITY).key("scene window", "1", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("game window", "2", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("inspector window", "3", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("hierarcht window", "4", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("project window", "5", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("animation window", "6", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("profiler window", "7", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("audio window", "8", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("asset window", "9", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("console window", "0", [KEY.CONTROL]);

// Tools
serenade.app(APP.UNITY).key("pan tool", "q");
serenade.app(APP.UNITY).key("move tool", "w");
serenade.app(APP.UNITY).key("rotate tool", "e");
serenade.app(APP.UNITY).key("scale tool", "r");
serenade.app(APP.UNITY).key("rectangle tool", "t");
serenade.app(APP.UNITY).key("pivot tool", "z");
serenade.app(APP.UNITY).key("pivot tool", "x");
serenade.app(APP.UNITY).key("vertex tool", "v");

// Manipulating GameObjects
serenade.app(APP.UNITY).key("create game object", "n", [KEY.CONTROL, KEY.SHIFT]);

// General Functions
serenade.app(APP.UNITY).key("undo", "z", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("redo", "t", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("cut", "x", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("copt", "c", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("paste", "v", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("duplicate", "d", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("find", "f", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("select all", "a", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("refresh", "r", [KEY.CONTROL]);
serenade.app(APP.UNITY).key("delete", KEY.DEL, [KEY.SHIFT]);
serenade.app(APP.UNITY).key("center selection", "f");
