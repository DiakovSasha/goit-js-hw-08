import throttle from 'lodash.throttle';

// const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const LOCAL_KEY = 'feedback-form-state';
const input = document.querySelector('input');

const formData = {};

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onSubmitButton);

function onTextareaInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onSubmitButton(event) {
  event.preventDefault();
  // console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));
  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
}
function onData() {
  const data = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (data) {
    input.value = data.email;
    textarea.value = data.message;
    console.log(data);
  }
}
onData();
