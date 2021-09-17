const CHAINABLE = require('../constants/chaining.js');

serenade.global().key("bang","!", undefined, CHAINABLE);
serenade.global().key("question","?", undefined, CHAINABLE);
serenade.global().key("period",".", undefined, CHAINABLE);
serenade.global().key("point",".", undefined, CHAINABLE);
serenade.global().key("dot",".", undefined, CHAINABLE);
serenade.global().key("comma",",", undefined, CHAINABLE);
serenade.global().key("colon",":", undefined, CHAINABLE);
serenade.global().key("semi",";", undefined, CHAINABLE);
serenade.global().key("greater than",">", undefined, CHAINABLE);
serenade.global().key("less than","<", undefined, CHAINABLE);
serenade.global().key("equals","=", undefined, CHAINABLE);
serenade.global().key("slash","/", undefined, CHAINABLE);
serenade.global().key("backslash","\\", undefined, CHAINABLE);
serenade.global().key("hash","#", undefined, CHAINABLE);
serenade.global().key("dollar","$", undefined, CHAINABLE);
serenade.global().key("underscore","_", undefined, CHAINABLE);
serenade.global().key("apos","'", undefined, CHAINABLE);
serenade.global().key("apostrophe","'", undefined, CHAINABLE);
serenade.global().key("quote","\"", undefined, CHAINABLE);
serenade.global().key("paren","(", undefined, CHAINABLE);
serenade.global().key("right paren",")", undefined, CHAINABLE);
serenade.global().key("brace","{", undefined, CHAINABLE);
serenade.global().key("right brace","}", undefined, CHAINABLE);
serenade.global().key("bracket","[", undefined, CHAINABLE);
serenade.global().key("right bracket","]", undefined, CHAINABLE);
serenade.global().command(
  "spam",
  async (api, matches) => {
    await api.typeText(", ");
  },
  undefined,
  CHAINABLE,
);
