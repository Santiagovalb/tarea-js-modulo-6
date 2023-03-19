

const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevents the default form submission behavior
  
    const emailInput = form.elements.email;
    const passwordInput = form.elements.password;
  
    // Check if both fields are filled
    if (emailInput.value === '' || passwordInput.value === '') {
      alert('All fields must be filled in.');
      return;
    }
  
    // Collect field values into an object
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
  
    // Display form data in the console
    console.log(formData);
  
    // Clear form fields
    form.reset();
  });