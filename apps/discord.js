const APP = require('../constants/apps.js');
const KEY = require('../constants/keys.js');

// Navigation
// const NAV = {
//   serverUp: [],
//   serverDown: [],
//   channelUp: [],
//   channelDown: [],
//   unreadChannelUp: [],
//   unreadChannelDown: [],
//   unreadChannelWithMentionsUp: [],
//   unreadChannelWithMentionsDown: [],
//   pageHistoryForward: [],
//   pageHistoryBackward: [],
//   currentCall: [],
//   toggleLastServerAndDm: [],
//   toggleQuickSwitcher: [],
//   createOrJoinServer: [],
// };

// const press = async (shortcut, api) => {
//   const [key, modifiers] = shortcut;
//   await api.pressKey(key, modifiers);
// };

serenade.app(APP.DISCORD).key("server up", KEY.UP, [KEY.CONTROL, KEY.ALT]);
serenade.app(APP.DISCORD).key("server down", KEY.DOWN, [KEY.CONTROL, KEY.ALT]);
serenade.app(APP.DISCORD).key("channel up", KEY.UP, [KEY.ALT]);
serenade.app(APP.DISCORD).key("channel down", KEY.DOWN, [KEY.ALT]);
serenade.app(APP.DISCORD).key("unread channel up", KEY.UP, [KEY.ALT, KEY.SHIFT]);
serenade.app(APP.DISCORD).key("unread channel down", KEY.DOWN, [KEY.ALT, KEY.SHIFT]);
serenade.app(APP.DISCORD).key("unread channel mentions up", KEY.UP, [KEY.CONTROL, KEY.SHIFT, KEY.ALT]);
serenade.app(APP.DISCORD).key("unread channel mentions down", KEY.DOWN, [KEY.CONTROL, KEY.SHIFT, KEY.ALT]);
serenade.app(APP.DISCORD).key("page history forward", KEY.RIGHT, [KEY.ALT]);
serenade.app(APP.DISCORD).key("page history backward", KEY.LEFT, [KEY.ALT]);
serenade.app(APP.DISCORD).key("current call", "v", [KEY.CONTROL, KEY.SHIFT, KEY.ALT]);
serenade.app(APP.DISCORD).key("toggle server dm", KEY.RIGHT, [KEY.CONTROL, KEY.ALT]);
serenade.app(APP.DISCORD).key("toggle quick switcher", "k", [KEY.CONTROL]);
serenade.app(APP.DISCORD).key("create server", "n", [KEY.CONTROL, KEY.SHIFT]);
serenade.app(APP.DISCORD).key("join server", "n", [KEY.CONTROL, KEY.SHIFT]);
