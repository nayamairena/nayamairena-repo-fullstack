/**
 * Naya Mairena
 * Fall 2022
 * CS465P Full Stack
 */
/** Exercise 01 - Coins **/

//Function that will use a conditional (ternary) operator to check if the change name needs to be plural.
const plurals = (count, word) => {
  //Check if last letter of the string ends with a "y". This is because "penny" is different than the others.
  if (word.slice(-1) === "y") {
    //Slice "penny" to be "penn".
    let newWord = word.slice(0, -1);
    //Return "pennies" if there is more than 1 penny.
    return count === 1 ? word : newWord + "ies";
  } else return count === 1 ? word : word + "s";
  //Else, we want to return the word with an "s" at the end for multiples.
};

//Function that will take a dollar amount as input and return its change broken down by coins.
const calculateChange = (input) => {
  // Add your code here
  //Multiple use cases to check before actual functionality.
  if (input > 10) return "Error: the number is too large.";
  else if (input === 0) return "Error: 0 returns no change.";
  else if (input < 0) return "Error: Negative dollar amount not allowed.";
  else if (isNaN(input)) return "Error: Input is not a number value.";
  else {
    //I decided to fix the values to be up to two decimal places.
    //I was getting the wrong change amounts with regular float values.
    let change = input.toFixed(2);
    //Get the number of dollars by rounding down.
    let dollars = Math.floor(input);
    //Calculate a new value for the remaining change.
    change = (change % 1).toFixed(2);
    let quarters = Math.floor(change / 0.25);
    change = (change % 0.25).toFixed(2);
    let dimes = Math.floor(change / 0.1);
    change = (change % 0.1).toFixed(2);
    let nickels = Math.floor(change / 0.05);
    change = (change % 0.05).toFixed(2);
    let pennies = Math.floor(change / 0.01);

    //Start the main message we will be returining.
    let mainMessage = "$" + input.toFixed(2) + " ==> ";

    //Check each change type, if it is greater than 0, we want to add it to our string.
    if (dollars > 0) {
      //Use plurals() to get either "dollar" or "dollars"
      let sDollars = plurals(dollars, "dollar");
      //For formatting purposes, we want to check if all the other change values are zero.
      //If they are 0, we want to only append the dollar string to main message and return it.
      if (quarters === 0 && dimes === 0 && nickels === 0 && pennies === 0)
        return (mainMessage += dollars + " " + sDollars);
      else mainMessage += dollars + " " + sDollars + ", ";
      //Else, we will append the dollar string to main message and add a ", " at the end.
    }
    //The rest of these conditions essentially do the same thing.
    if (quarters > 0) {
      let sQuarters = plurals(quarters, "quarter");
      if (dimes === 0 && nickels === 0 && pennies === 0)
        return (mainMessage += quarters + " " + sQuarters);
      else mainMessage += quarters + " " + sQuarters + ", ";
    }
    if (dimes > 0) {
      let sDimes = plurals(dimes, "dime");
      if (nickels === 0 && pennies === 0)
        return (mainMessage += dimes + " " + sDimes);
      else mainMessage += dimes + " " + sDimes + ", ";
    }
    if (nickels > 0) {
      let sNickels = plurals(nickels, "nickel");
      if (pennies === 0) return (mainMessage += nickels + " " + sNickels);
      else mainMessage += nickels + " " + sNickels + ", ";
    }
    if (pennies > 0) {
      let sPennies = plurals(pennies, "penny");
      mainMessage += pennies + " " + sPennies;
      return mainMessage;
    }
  }
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large.

//My own tests for other edge cases.
console.log(calculateChange(0));
// 0 ==> Error: 0 returns no change.
console.log(calculateChange(-1.11));
// -1.11 ==> Error: Negative dollar amount not allowed.
console.log(calculateChange("Hello"));
// "Hello" ==> Error: Input is not a number value.

//These will test the formatting when excluding values with 0.
console.log(calculateChange(1.25));
// $1.25 ==> 1 dollar, 1 quarter
console.log(calculateChange(1.35));
// $1.35 ==> 1 dollar, 1 quarter, 1 dime
console.log(calculateChange(1.4));
// $1.35 ==> 1 dollar, 1 quarter, 1 dime, 1 nickel
console.log(calculateChange(1.41));
// $1.35 ==> 1 dollar, 1 quarter, 1 dime, 1 nickel, 1 penny
console.log(calculateChange(1));
// $1.00 ==> 1 dollar
console.log(calculateChange(0.25));
// $0.25 ==> 1 quarter
console.log(calculateChange(0.1));
// $0.10 ==> 1 dime
console.log(calculateChange(0.05));
// $0.05 ==> 1 nickel
console.log(calculateChange(0.01));
// $0.01 ==> 1 penny
console.log(calculateChange(0.02));
// $0.01 ==> 2 pennies
