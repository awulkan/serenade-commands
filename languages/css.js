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
