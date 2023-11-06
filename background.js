// background.js
chrome.webNavigation.onCommitted.addListener((details) => {
    chrome.tabs.executeScript(details.tabId, { file: "content.js" });
  });
  
  chrome.tabs.onCreated.addListener((tab) => {
    chrome.tabs.executeScript(tab.id, { file: "content.js" });
  });
  