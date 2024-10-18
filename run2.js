/// execute_script.js
window.addEventListener("keyup", event => {
  // Check if the key released is 'q' (key code 81)
  // and if the backtick key (key code 192) is also pressed
  if (event.which === 81 && event.ctrlKey) {
    let code = prompt("Enter a message:");
    alert(code);
  }
});
