// content.js
const currentUrl = window.location.href;

  fetch("list.txt")
  .then((response) => response.text())
  .then((text) => {
    const blockedWebsites = text.split("\n").map((item) => item.trim());
    // Check if the currentUrl matches any URL in the list
    let isBlocked = false;
    for (const url of blockedWebsites) {
      if (currentUrl === url) {
        document.body.parentNode.removeChild(document.body);
      }
    }
  });