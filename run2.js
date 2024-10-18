window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
    let code = prompt("Run Code:");
    if (code.startsWith("javascript:")) {
      code = code.substring(11);
    }
    eval(code);
    alert('test')
  }
});
