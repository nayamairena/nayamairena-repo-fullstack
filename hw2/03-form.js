/**
 * Naya Mairena
 * Fall 2022
 * CS465P Full Stack
 */
/** Exercise 03 - Form **/

let form = document.querySelector('form');

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

section1.className = 'mb-3';
nameLabel.textContent = 'Name*';
nameLabel.className = 'form-label';
nameInput.type = 'text';
nameInput.required = 'true';
nameInput.className = 'form-control';
nameInput.id = 'name';
nameLabel.htmlFor = 'name';
section1.append(nameLabel);
section1.append(nameInput);
form.append(section1);

section2.className = 'mb-3';
emailLabel.textContent = 'Email*';
emailLabel.className = 'form-label';
emailInput.type = 'email';
emailInput.required = 'true';
emailInput.className = 'form-control';
emailInput.id = 'email';
emailLabel.htmlFor = 'email';
section2.append(emailLabel);
section2.append(emailInput);
form.append(section2);

section3.className = 'mb-3';
messageLabel.textContent = 'Submit your message:';
messageLabel.className = 'form-label';
messageInput.className = 'form-control';
messageInput.id = 'message';
messageLabel.htmlFor = 'message';
section3.append(messageLabel);
section3.append(messageInput);
form.append(section3);

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

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  console.log('========= Form Submission =========');
  console.log('Name: ' + nameInput.value);
  console.log('Email: ' + emailInput.value);
  if (!messageInput.value) console.log('No feedback was submitted.');
  else console.log('Feedback: ' + messageInput.value);
  if (checkboxInput.checked == true)
    console.log('Newsletter: Yes, I would like to join the newsletter.');
  if (checkboxInput.checked == false) console.log('Newsletter: No, thank you.');
}
