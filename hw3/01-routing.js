const http = require('http');
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// http://localhost:5001/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const server = http.createServer((req, res) => {
  const routes = [
    'welcome',
    'redirect',
    'redirected',
    'cache',
    'cookie',
    'check-cookies',
    'other',
  ];

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 01</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
    res.end();
  }
  // Add your code here
  //Welcome Route
  else if (req.url === `/${routes[0]}`) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hi! Welcome to my Welcome page!</h1>');
    res.end();
  }
  //Redirect Route
  else if (req.url === `/${routes[1]}`) {
    res.writeHead(302, { Location: `/${routes[2]}` });
    res.end();
  }
  //Redirected Route
  else if (req.url === `/${routes[2]}`) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<h1>Hi, redirect has been redirected. You are now in redirected.</h1>'
    );
    res.end();
  }
  //Cache Route
  else if (req.url === `/${routes[3]}`) {
    res.setHeader('CacheControl', 'max-age=86400');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('this resource was cached');
    res.end();
  }
  //Cookie Route
  else if (req.url === `/${routes[4]}`) {
    res.writeHead(200, {
      'Set-Cookie': 'hello=world',
      'Content-Type': 'text/plain',
    });
    res.write('cookies... yummm');
    res.end();
  }
  //Check Cookie Route
  else if (req.url === `/${routes[5]}`) {
    Cookie = req.headers.cookie;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (Cookie === 'hello=world') res.write('Yes');
    else res.write('No');
    res.end();
  }
  //Other route
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
