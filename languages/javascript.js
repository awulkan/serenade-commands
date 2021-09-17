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
