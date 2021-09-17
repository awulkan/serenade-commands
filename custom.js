/* Serenade Custom Commands

In this file, you can define your own custom commands with the Serenade API.

For instance, here's a custom automation that opens your terminal and runs a command:

serenade.global().command("make", api => {
  api.focusApplication("terminal");
  api.typeText("make clean && make");
  api.pressKey("return");
});

And, here's a Python snippet for creating a test method:

serenade.language("python").snippet(
  "test method <%identifier%>",
  "def test_<%identifier%>(self):<%newline%><%indent%>pass",
  { "identifier": ["underscores"] }
  "method"
);

For more information, check out the Serenade API documentation: https://serenade.ai/docs/api

*/

const CHAINABLE = {
  autoExecute: true,
  chainable: 'any',
};


// GLOBAL
serenade.global().command(
  "mo",
  async (api, matches) => {
    await api.click("left");
  }
);
serenade.global().command(
  "touch",
  async (api, matches) => {
    await api.click("left");
  }
);
serenade.global().command(
  "put <%words%>",
  async (api, matches) => {
    const command = `insert ${matches.words}`
    await api.runCommand(command);
  }
);
serenade.global().command(
  "say <%words%>",
  async (api, matches) => {
    await api.runCommand(`dictate ${matches.words.replace('space', 'escape space')}`);
  }
);

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

serenade.global().key("pop","backspace");
serenade.global().key("home","home");
serenade.global().key("end","end");
serenade.global().key("go top", "home", ["control"]);
serenade.global().key("go bottom", "end", ["control"]);

// serenade.global().key("zero","0");
// serenade.global().key("one","1");
// serenade.global().key("two","2");
// serenade.global().key("three","3");
// serenade.global().key("four","4");
// serenade.global().key("five","5");
// serenade.global().key("six","6");
// serenade.global().key("seven","7");
// serenade.global().key("eight","8");
// serenade.global().key("nine","9");

serenade.global().key("air","a", undefined, CHAINABLE);
serenade.global().key("bat","b", undefined, CHAINABLE);
serenade.global().key("cap","c", undefined, CHAINABLE);
serenade.global().key("drum","d", undefined, CHAINABLE);
serenade.global().key("each","e", undefined, CHAINABLE);
serenade.global().key("fine","f", undefined, CHAINABLE);
serenade.global().key("gust","g", undefined, CHAINABLE);
serenade.global().key("harp","h", undefined, CHAINABLE);
serenade.global().key("sit","i", undefined, CHAINABLE);
serenade.global().key("jury","j", undefined, CHAINABLE);
serenade.global().key("crunch","k", undefined, CHAINABLE);
serenade.global().key("look","l", undefined, CHAINABLE);
serenade.global().key("made","m", undefined, CHAINABLE);
serenade.global().key("near","n", undefined, CHAINABLE);
serenade.global().key("odd","o", undefined, CHAINABLE);
serenade.global().key("pit","p", undefined, CHAINABLE);
serenade.global().key("quench","q", undefined, CHAINABLE);
serenade.global().key("red","r", undefined, CHAINABLE);
serenade.global().key("sun","s", undefined, CHAINABLE);
serenade.global().key("trap","t", undefined, CHAINABLE);
serenade.global().key("urge","u", undefined, CHAINABLE);
serenade.global().key("vest","v", undefined, CHAINABLE);
serenade.global().key("whale","w", undefined, CHAINABLE);
serenade.global().key("plex","x", undefined, CHAINABLE);
serenade.global().key("yank","y", undefined, CHAINABLE);
serenade.global().key("sip","z", undefined, CHAINABLE);


// function replaceKeywords(text) {
//   const words = {
//     "air": "a",
//     "bat": "b",
//     "cap": "c",
//     "drum": "d",
//     "each": "e",
//     "fine": "f",
//     "gust": "g",
//     "harp": "h",
//     "sit": "i",
//     "jury": "j",
//     "crunch": "k",
//     "look": "l",
//     "made": "m",
//     "near": "n",
//     "odd": "o",
//     "pit": "p",
//     "quench": "q",
//     "red": "r",
//     "sierra": "s",
//     "trap": "t",
//     "urge": "u",
//     "vest": "v",
//     "whale": "w",
//     "plex": "x",
//     "yank": "y",
//     "sip": "z",
//     "space": " ",
//     "slash": "/",
//     "backslash": "\\",
//     "at": "@",
//     "dollar": "$",
//     "dot": ".",
//     "point": ".",
//     "period": ".",
//     "dash": "-",
//     "minus": "-",
//     "plus": "+",
//   }
//   return text.split(' ').map(word => words[word] || word).join('');
// }

// serenade.global().command("say <%text%>", async (api, matches) => {
//   api.typeText(replaceKeywords(matches.text));
// });

// JS

// Add function.
serenade.language("javascript").snippet(
  "put function <%name%> of <%parameter%>",
  "function <%name%>(<%parameter%>) {<%newline%><%indent%><%cursor%><%newline%>}",
  { "name": ["camel"], "parameter": ["camel"] },
  "inline"
);

// Add function.
serenade.language("javascript").snippet(
  "put async function <%name%> of <%parameter%>",
  "async function <%name%>(<%parameter%>) {<%newline%><%indent%><%cursor%><%newline%>}",
  { "name": ["camel"], "parameter": ["camel"] },
  "inline"
);


// CSS

// Add ID.
serenade.language("css").snippet(
  "add id <%name%>",
  "#<%name%> {<%newline%><%indent%><%cursor%><%newline%>}",
  { "name": ["dashes"] },
  "inline"
);

// Add class.
serenade.language("css").snippet(
  "add class <%name%>",
  ".<%name%> {<%newline%><%indent%><%cursor%><%newline%>}",
  { "name": ["dashes"] },
  "inline"
);


// HTML

// Add class attribute with class.
serenade.language("html").snippet(
  "put class <%name%>",
  "class=\"<%name%><%cursor%>\"",
  { "name": ["dashes"] },
  "inline"
);
