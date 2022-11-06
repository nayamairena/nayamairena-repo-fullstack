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

  if (req.body.check)
    res.send(
      `Name: ${req.body.Name} <br> Email: ${req.body.Email} <br> Comments: ${req.body.Comments} <br>Newsletter: Yes, sign me up.`
    );
  else
    res.send(
      `Name: ${req.body.Name} <br> Email: ${req.body.Email} <br> Comments: ${req.body.Comments} <br>Newsletter: No, thank you.`
    );
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
