const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;

// Add your code here
/*
app.get('/', (req, res) => {
  // Add your code here
  res.status(200);
  res.set({ 'Content-Type': 'text/plain' });
  if (req.session.routes === undefined) {
    req.session.routes = [];
    req.session.routes.push(req.path);
  }
  res.send(
    `Currently on route: ${req.path}\n\nWelcome to http://localhost:${port}`
  );
});
*/
// Use the express-session module
app.use(
  session({
    store: new session.MemoryStore(),
    secret: 'a secret to sign the cookie',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  // Add your code here
  res.status(200);
  res.set({ 'Content-Type': 'text/plain' });
  if (req.session.routes === undefined) {
    req.session.routes = [];
    req.session.routes.push(`\t${req.path}`);
    res.send(
      `Currently on route: ${req.path}\n\nWelcome to http://localhost:${port}`
    );
  } else {
    req.session.routes.push(req.path);
    res.send(
      `Currently on route: ${
        req.path
      }\n\nWelcome to http://localhost:${port}\n\nPreviously visited:\n${req.session.routes
        .slice(0, -1)
        .join('\n\t')}`
    );
  }
});

app.get('/:routes', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/plain' });
  if (req.session.routes.includes(req.path)) {
    req.session.routes.push(req.path);
    res.send(
      `Currently on route: ${
        req.path
      }\n\nPreviously visited:\n${req.session.routes.slice(0, -1).join(`\n\t`)}`
    );
  } else {
    req.session.routes.push(req.path);
    res.send(
      `Currently on route: ${
        req.path
      }\n\nWelcome to http://localhost:${port}\n\nPreviously visited:\n${req.session.routes
        .slice(0, -1)
        .join('\n\t')}`
    );
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
