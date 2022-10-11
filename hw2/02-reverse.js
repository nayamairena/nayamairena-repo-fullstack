/**
 * Naya Mairena
 * Fall 2022
 * CS465P Full Stack
 */
/** Exercise 02 - Reverse **/

//Get html element by ID utilizing the DOM.
//This html element is the button, so this function is handling on click.
document.getElementById('reverse').onclick = () => {
  //Get the input html element which is the number entered by the user.
  let numberInput = document.getElementById('input');
  //I added a <div> in the html file that has id = "output" to be able to display our output.
  let numberOutput = document.getElementById('output');

  //Check if the input value contains 8 numbers.
  if (numberInput.value.length === 8) {
    //Using bootstrap class names, format the text to be green and have top margins.
    numberOutput.className = 'text-success mt-3';
    //Set the output <div> to have text of the result.
    numberOutput.textContent =
      numberInput.value + ' --> ' + reverseNumber(numberInput.value);
  } else {
    //If the input is not 8 numbers, using bootstrap class names, make the text red.
    numberOutput.className = 'text-danger mt-3';
    numberOutput.textContent = 'Error: Please input an 8-digit number';
  }
};

//Function that will reverse the number.
const reverseNumber = (input) => {
  input.toString();
  let reverse = input.split('').reverse().join('');
  return reverse;
};
