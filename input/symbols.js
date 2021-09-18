const CHAIN = require('../constants/chaining.js');

serenade.global().key("bang","!", undefined, CHAIN.AUTO_ANY);
serenade.global().key("question","?", undefined, CHAIN.AUTO_ANY);
serenade.global().key("period",".", undefined, CHAIN.AUTO_ANY);
serenade.global().key("point",".", undefined, CHAIN.AUTO_ANY);
serenade.global().key("dot",".", undefined, CHAIN.AUTO_ANY);
serenade.global().key("comma",",", undefined, CHAIN.AUTO_ANY);
serenade.global().key("colon",":", undefined, CHAIN.AUTO_ANY);
serenade.global().key("semi",";", undefined, CHAIN.AUTO_ANY);
serenade.global().key("greater than",">", undefined, CHAIN.AUTO_ANY);
serenade.global().key("less than","<", undefined, CHAIN.AUTO_ANY);
serenade.global().key("equals","=", undefined, CHAIN.AUTO_ANY);
serenade.global().key("slash","/", undefined, CHAIN.AUTO_ANY);
serenade.global().key("backslash","\\", undefined, CHAIN.AUTO_ANY);
serenade.global().key("hash","#", undefined, CHAIN.AUTO_ANY);
serenade.global().key("dollar","$", undefined, CHAIN.AUTO_ANY);
serenade.global().key("underscore","_", undefined, CHAIN.AUTO_ANY);
serenade.global().key("apos","'", undefined, CHAIN.AUTO_ANY);
serenade.global().key("apostrophe","'", undefined, CHAIN.AUTO_ANY);
serenade.global().key("quote","\"", undefined, CHAIN.AUTO_ANY);
serenade.global().key("paren","(", undefined, CHAIN.AUTO_ANY);
serenade.global().key("right paren",")", undefined, CHAIN.AUTO_ANY);
serenade.global().key("brace","{", undefined, CHAIN.AUTO_ANY);
serenade.global().key("right brace","}", undefined, CHAIN.AUTO_ANY);
serenade.global().key("bracket","[", undefined, CHAIN.AUTO_ANY);
serenade.global().key("right bracket","]", undefined, CHAIN.AUTO_ANY);
serenade.global().command(
  "spam",
  async (api, matches) => {
    await api.typeText(", ");
  },
  undefined,
  CHAIN.AUTO_ANY,
);
