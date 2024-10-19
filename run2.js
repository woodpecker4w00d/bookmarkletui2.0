/// execute_script.js
window.addEventListener("keyup", event => {
  // Check if the key released is '`' (key code 192)
  // and if the shift key is also pressed
  if (event.which === 192 && event.shiftKey) {
    let code = prompt("Enter a message:");
    alert(code);
  }
});
