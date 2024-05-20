// (function() {
//   function toggleInputMode() {
//     console.log('toggleInputMode');
//     const inputField = document.getElementById('customInput');
//     // Toggle between numeric and text input modes
//     if (inputField.getAttribute('inputmode') === 'numeric') {
//       inputField.setAttribute('inputmode', 'text');
//     } else {
//       inputField.setAttribute('inputmode', 'numeric');
//     }
//   }
  
//   document.getElementById('alphanumericInput').addEventListener('input', function (e) {
//     var value = e.target.value;
//     var lastChar = value.charAt(value.length - 1);
  
//     // Check if the last character is a letter
//     if (/[a-zA-Z]/.test(lastChar)) {
//       // Temporarily remove focus to trigger input mode change
//       e.target.blur();
//       e.target.setAttribute('inputmode', 'text');
//       e.target.focus();
//     } else if (/\d/.test(lastChar)) {
//       // Switch back to numeric if last character is a number
//       e.target.blur();
//       e.target.setAttribute('inputmode', 'numeric');
//       e.target.focus();
//     }
//   });
  
//   document.getElementById('alphanumericForm').addEventListener('submit', function (e) {
//     e.preventDefault();
  
//     var numberValue = document.getElementById('numberInput').value;
//     var letterValue = document.getElementById('letterInput').value;
  
//     var combinedValue = numberValue + letterValue;
//     document.getElementById('combinedInput').value = combinedValue;
  
//     // For demonstration purposes, alert the combined value
//     alert('Combined Value: ' + combinedValue);
  
//     // Here you can process the combined value as needed
//     // For example, sending it to the server or further validation
//   });
  
//   document.getElementById('customInput2').addEventListener('input', function (e) {
//     const inputField = e.target;
//     const value = inputField.value;
  
//     console.log('inputField', inputField);
//     console.log('value', value);
  
//     // Check if the first two characters are digits
//     if (/^\d{2}$/.test(value)) {
//       inputField.setAttribute('inputmode', 'text');
//       console.log('text');
//     } else if (value.length < 2) {
//       inputField.setAttribute('inputmode', 'numeric');
//       console.log('numeric');
//     }
//   });
// })();
