function toggleInputMode() {
  console.log('toggleInputMode');
  const inputField = document.getElementById('customInput');
  // Toggle between numeric and text input modes
  if (inputField.getAttribute('inputmode') === 'numeric') {
    inputField.setAttribute('inputmode', 'text');
  } else {
    inputField.setAttribute('inputmode', 'numeric');
  }
}