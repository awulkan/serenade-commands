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

serenade.global().command("get running applications", async (api, matches) => {
  const apps = await api.getRunningApplications();
  await api.typeText(apps.toString());
});

serenade.global().command("get active application", async (api, matches) => {
  const app = await api.getActiveApplication();
  await api.typeText(app);
});
