const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an object
app.use(express.urlencoded({ extended: false }));

// POST request
app.post('/submit', (req, res) => {
  // Add your code here
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.write(`Name: ${req.body.Name} <br>`);
  res.write(`Email: ${req.body.Email} <br>`);
  res.write(`Comments: ${req.body.Comments} <br>`);
  if (req.body.check) res.write(`Newsletter: Yes, sign me up.`);
  else res.write(`Newsletter: No, thank you.`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
