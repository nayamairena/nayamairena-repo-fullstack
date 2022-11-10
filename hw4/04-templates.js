const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5001;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.com/v3.1/all';

// Add your code here

app.get('/', (req, res) => {
  // render pug template for the index.html file
  res.render('index', {
    heading: 'Countries of the World',
    main: 'Welcome to this application. Using the REST Countries API, we will be showing the countries and capitals of the world, the most populous countries in the world, and the number of countries in each region of the world',
  });
});

app.get('/capitals', (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array

  let countries = [];
  axios
    .get(url)
    .then((response) => {
      response.data.forEach((element) => {
        countries.push(`${element.name.common} - ${element.capital}`);
        countries.sort();
      });

      res.render('page', {
        heading: 'Countries and Capitals',
        results: countries,
      });
    })
    .catch((err) => {
      res.render('error', {
        heading: 'Countries and Capitals',
        results: `Error with API: \n${err}`,
      });
    });
});

app.get('/populous', (req, res) => {
  // filter the output array for the countries with population of 50 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

  let populous = [];
  axios
    .get(url)
    .then((response) => {
      response.data.sort((a, b) => b.population - a.population);
      response.data.forEach((element) => {
        if (element.population >= 5000000)
          populous.push(`${element.name.common} - ${element.population}`);
      });

      res.render('page', {
        heading: 'Most Populous Countries',
        results: populous,
      });
    })
    .catch((err) => {
      res.render('error', {
        heading: 'Most Populous Countries',
        results: `Error with API: \n${err}`,
      });
    });
});

app.get('/regions', (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

  let regions = ['Asia - 50', 'Europe - 53', 'Africa - 60'];

  res.render('page', {
    heading: 'Regions of the World',
    results: regions,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
