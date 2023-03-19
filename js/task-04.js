const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let count = 0;

decrementBtn.addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});

incrementBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});