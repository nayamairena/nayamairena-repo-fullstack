const http = require('http');
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  const routes = [
    '/attributes?hello=world&lorem=ipsum',
    '/items?first=1&second=2&third=3&fourth=4',
    '/characters?spongebob=squarepants&patrick=star&sandy=cheeks',
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );
    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 02</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
  }

  // Add your code here
  //Check if query parameters exist in the URL.
  else if (url.search.length > 0) {
    //Create a string variable to be able to append strings based on the queries.
    let htmlString = '';
    //Search for each value and associated key in the url query parameters.
    url.searchParams.forEach((value, key) => {
      //Append to the string a table row and column in html.
      htmlString += `<tr> <td> ${key} </td> <td> ${value} </td> </tr>`;
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<table border = "1"> ${htmlString} </table>`);
  }
  //If the URL has no valid query parameters, give error message.
  else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h3>Error: No query parameters found in ${url}.</h3>`);
  }
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
