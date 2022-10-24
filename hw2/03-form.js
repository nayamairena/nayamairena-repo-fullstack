/**
 * Naya Mairena
 * Fall 2022
 * CS465P Full Stack
 */
/** Exercise 03 - Form **/

//Get the form tag from the html file.
let form = document.querySelector('form');

//Create all the html tags that will be necessary.
let section1 = document.createElement('section');
let nameLabel = document.createElement('label');
let nameInput = document.createElement('input');
let section2 = document.createElement('section');
let emailLabel = document.createElement('label');
let emailInput = document.createElement('input');
let section3 = document.createElement('section');
let messageLabel = document.createElement('label');
let messageInput = document.createElement('textarea');
let section4 = document.createElement('section');
let checkboxLabel = document.createElement('label');
let checkboxInput = document.createElement('input');
let section5 = document.createElement('section');
let submitButton = document.createElement('button');
let resetButton = document.createElement('button');

//First section for the name input. Using bootstrap class names.
section1.className = 'mb-3';
nameLabel.textContent = 'Name*';
nameLabel.className = 'form-label';
nameInput.type = 'text';
//A name must be entered.
nameInput.required = 'true';
nameInput.className = 'form-control';
//Attach label to the input for accessibility.
nameInput.id = 'name';
nameLabel.htmlFor = 'name';
//Append the name label and input to the section.
section1.append(nameLabel);
section1.append(nameInput);
//Append the section to the form.
form.append(section1);

//Second section for email input.
section2.className = 'mb-3';
emailLabel.textContent = 'Email*';
emailLabel.className = 'form-label';
emailInput.type = 'email';
//Email must be entered.
emailInput.required = 'true';
emailInput.className = 'form-control';
//Attach label to the input for accessibility.
emailInput.id = 'email';
emailLabel.htmlFor = 'email';
section2.append(emailLabel);
section2.append(emailInput);
form.append(section2);

//Third section to submit a message.
section3.className = 'mb-3';
messageLabel.textContent = 'Submit your message:';
messageLabel.className = 'form-label';
messageInput.className = 'form-control';
//Attach label to the input for accessibility.
messageInput.id = 'message';
messageLabel.htmlFor = 'message';
section3.append(messageLabel);
section3.append(messageInput);
form.append(section3);

//Fourth section for checkbox.
section4.className = 'mb-3';
checkboxLabel.className = 'form-check-label ms-2';
checkboxLabel.textContent = 'Sign up for the newsletter';
checkboxInput.type = 'checkbox';
checkboxInput.className = 'form-check-input';
checkboxInput.id = 'check';
checkboxLabel.htmlFor = 'check';
section4.append(checkboxInput);
section4.append(checkboxLabel);
form.append(section4);

//Fifth section for buttons. Using Bootstrap grid system.
section5.className = 'mb-3 row';
submitButton.className = 'ms-3 col btn btn-primary';
submitButton.type = 'submit';
submitButton.textContent = 'Submit';
resetButton.className = 'ms-1 me-3 col btn btn-secondary';
resetButton.type = 'reset';
resetButton.textContent = 'Reset';
section5.append(submitButton);
section5.append(resetButton);
form.append(section5);

//EventListener when the submit button is pressed.
form.addEventListener('submit', handleSubmit);

//Function to handle when submit button is pressed.
function handleSubmit(event) {
  event.preventDefault();
  console.log('========= Form Submission =========');
  console.log('Name: ' + nameInput.value);
  console.log('Email: ' + emailInput.value);
  //Check if feedback input is empty to display alternative message.
  if (!messageInput.value) console.log('No feedback was submitted.');
  else console.log('Feedback: ' + messageInput.value);
  //Check if checkbox is checked or unchecked.
  if (checkboxInput.checked == true)
    console.log('Newsletter: Yes, I would like to join the newsletter.');
  else if (checkboxInput.checked == false)
    console.log('Newsletter: No, thank you.');
}
