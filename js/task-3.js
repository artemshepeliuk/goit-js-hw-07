
  // Find the input and span elements
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  // Add event listener for input event
  nameInput.addEventListener('input', function() {
    // Get the input value and trim spaces from the edges
    const name = nameInput.value.trim();

    // If the name is empty, set it to "Anonymous", otherwise use the entered name
    if (name === '') {
      nameOutput.textContent = 'Anonymous';
    } else {
      nameOutput.textContent = name;
    }
  });