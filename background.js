// background.js
chrome.webNavigation.onCommitted.addListener((details) => {
  console.log("onCommitted event triggered");
  chrome.tabs.executeScript(details.tabId, { file: "content.js" });
});

chrome.tabs.onCreated.addListener((tab) => {
  console.log("onCreated event triggered");
  chrome.tabs.executeScript(tab.id, { file: "content.js" });
});
