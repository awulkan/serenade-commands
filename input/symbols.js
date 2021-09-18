const OPT = require('../constants/command_options.js');

serenade.global().key("bang", "!", undefined, OPT.AUTO_ANY);
serenade.global().key("question", "?", undefined, OPT.AUTO_ANY);
serenade.global().key("period", ".", undefined, OPT.AUTO_ANY);
serenade.global().key("point", ".", undefined, OPT.AUTO_ANY);
serenade.global().key("dot", ".", undefined, OPT.AUTO_ANY);
serenade.global().key("comma", ",", undefined, OPT.AUTO_ANY);
serenade.global().key("colon", ":", undefined, OPT.AUTO_ANY);
serenade.global().key("semi", ";", undefined, OPT.AUTO_ANY);
serenade.global().key("greater than", ">", undefined, OPT.AUTO_ANY);
serenade.global().key("less than", "<", undefined, OPT.AUTO_ANY);
serenade.global().key("equals", "=", undefined, OPT.AUTO_ANY);
serenade.global().key("slash", "/", undefined, OPT.AUTO_ANY);
serenade.global().key("backslash", "\\", undefined, OPT.AUTO_ANY);
serenade.global().key("hash", "#", undefined, OPT.AUTO_ANY);
serenade.global().key("dollar", "$", undefined, OPT.AUTO_ANY);
serenade.global().key("underscore", "_", undefined, OPT.AUTO_ANY);
serenade.global().key("apos", "'", undefined, OPT.AUTO_ANY);
serenade.global().key("apostrophe", "'", undefined, OPT.AUTO_ANY);
serenade.global().key("quote", "\"", undefined, OPT.AUTO_ANY);
serenade.global().key("paren", "(", undefined, OPT.AUTO_ANY);
serenade.global().key("right paren", ")", undefined, OPT.AUTO_ANY);
serenade.global().key("brace", "{", undefined, OPT.AUTO_ANY);
serenade.global().key("right brace", "}", undefined, OPT.AUTO_ANY);
serenade.global().key("bracket", "[", undefined, OPT.AUTO_ANY);
serenade.global().key("right bracket", "]", undefined, OPT.AUTO_ANY);
serenade.global().command(
  "spam",
  async (api, matches) => {
    await api.typeText(", ");
  },
  undefined,
  OPT.AUTO_ANY,
);
