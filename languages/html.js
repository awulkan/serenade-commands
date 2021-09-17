// Add class attribute with class.
serenade.language("html").snippet(
  "put class <%name%>",
  "class=\"<%name%><%cursor%>\"",
  { "name": ["dashes"] },
  "inline"
);
