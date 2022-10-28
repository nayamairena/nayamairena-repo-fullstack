const http = require('http');
const { URLSearchParams } = require('url');
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

//html form for webpage.
const postHTML = `<html><body>
  <form method='post' action='/submit'>
  <label for="Name">Name: </label><br/>
  <input type="text" name="Name" id="Name"><br/>
  <label for="Email">Email: </label><br/>
  <input type="text" name="Email" id="Email"><br/>
  <label for="Comments">Comments: </label><br/>
  <textarea name="Comments" id="Comments"></textarea><br/>
  <input type="checkbox" name="check" id="check">
  <label for="check">Sign up for the newsletter: </label><br/>
  <input type='submit'>
  </form></body></html>`;

const server = http.createServer((req, res) => {
  //form url.
  if (req.url === '/form') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(postHTML);
    res.end();
  }
  //submit url. Redirected here when submit button is pressed.
  else if (req.url === '/submit') {
    let body = '';
    //Get data from form.
    req.on('data', (chunk) => {
      body += chunk;
      console.log('on data: ' + body);
    });
    //Go to submit page and post the data from the form.
    req.on('end', () => {
      console.log('on end: ' + body);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const paramsResult = new URLSearchParams(body);
      let keyArray = [];
      let valueArray = [];
      paramsResult.forEach((value, key) => {
        keyArray.push(key);
        valueArray.push(value);
      });
      //Need to check if checkbox was checked for news letter.
      if (keyArray.length === 4) {
        for (let i = 0; i < 3; i++) {
          res.write(`${keyArray[i]}: ${valueArray[i]} <br>`);
        }
        res.write('Newsletter: Yes, sign me up for the newsletter.');
      } else {
        for (let i = 0; i < keyArray.length; i++) {
          res.write(`${keyArray[i]}: ${valueArray[i]} <br>`);
        }
        res.write('Newsletter: No, Thank you.');
      }
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/form`);
});
