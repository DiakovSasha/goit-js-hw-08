import throttle from 'lodash.throttle';

// const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const LOCAL_KEY = 'feedback-form-state';
const input = document.querySelector('input');

input.addEventListener('input', throttle(onTextareaInput, 500));
textarea.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onSubmitButton);

function onTextareaInput() {
  localStorage.setItem(
    LOCAL_KEY,
    JSON.stringify({
      email: input.value,
      message: textarea.value,
    })
  );
}

function onSubmitButton(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));
  form.reset();
  localStorage.clear();
}
function onData() {
  const data = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (data) {
    input.value = data.email;
    textarea.value = data.message;
  }
  return;
}
onData();
