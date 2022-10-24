/**
 * Naya Mairena
 * Fall 2022
 * CS465P Full Stack
 */
/** Exercise 04 - API **/
const url = 'https://restcountries.com/v3.1/all';

// Add your code here
//Get the ordered list tag from the html file.
let mainSection = document.querySelector('#results');

//Function to add each html tag individually.
const addCountryToDOM = (country) => {
  //Create a list html item.
  let listItem = document.createElement('li');
  //Put the string together into that list tag. toLocaleString will add commas to the population number.
  listItem.textContent =
    country.name.common + ' - ' + country.population.toLocaleString('en-US');
  mainSection.append(listItem);
};

const getData = async (url) => {
  //try catch to error handle if loading API data doesn't work.
  try {
    //Fetch the API data.
    const response = await fetch(url);
    const data = await response.json();
    //Print to the console our data.
    console.log('Fetch all countries');
    console.log(data);
    //Sort the data alphabetically.
    data.sort(function (a, b) {
      return a.name.common.localeCompare(b.name.common);
    });
    //Loop through each item and add one at a time as an html list item.
    data.forEach((item) => {
      addCountryToDOM(item);
    });
  } catch (error) {
    //Catch the error and display an error message.
    console.error('Request failed', error);
    //Show error message to the webpage by creating an html element.
    let element = document.createElement('div');
    element.textContent = 'An error occured. Please reload the page.';
    app.append(element);
  }
};

getData(url);
