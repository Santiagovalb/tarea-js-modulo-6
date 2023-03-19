const input = document.querySelector('#validation-input');

input.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
    const inputLength = Number(input.dataset.length);
    const inputValue = event.target.value.trim().length;

    if (inputValue === inputLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else if (inputValue === 0) {
        input.classList.remove('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}