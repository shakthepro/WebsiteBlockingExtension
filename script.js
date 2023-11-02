// content.js

chrome.storage.local.get(['blockedWebsites'], function(result) {
    const blockedWebsites = result.blockedWebsites || [];
  
    const currentWebsite = window.location.hostname;
  
    if (blockedWebsites.includes(currentWebsite)) {
      const elements = document.getElementsByTagName('*');
      for (let element of elements) {
        element.parentNode.removeChild(element);
      }
  
      alert('This website is blocked due to NSFW content.');
    }
  });
  