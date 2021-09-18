const KEY = require('../constants/keys.js');

serenade.global().command("find <%text%>", async (api, matches) => {
  await api.pressKey("f", [KEY.COMMAND_OR_CONTROL]);
  await api.typeText(matches.text);
});

serenade.global().command("zoom in", async (api, matches) => {
  await api.pressKey("+", [KEY.COMMAND_OR_CONTROL]);
});

serenade.global().command("zoom out", async (api, matches) => {
  await api.pressKey("-", [KEY.COMMAND_OR_CONTROL]);
});
