// content.js
const currentUrl = window.location.href;

fetch("newfile.txt")
  .then((response) => response.text())
  .then((text) => {
    if (text.includes(currentUrl)) {
      document.body.parentNode.removeChild(document.body);
    }
  });