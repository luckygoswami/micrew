let intervalId;
let printCount = 0;
const maxPrints = 15;

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed.");
});

chrome.action.onClicked.addListener((tab) => {
  if (!intervalId) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["content.js"],
      },
      () => {
        intervalId = setInterval(() => {
          if (printCount < maxPrints) {
            chrome.tabs.sendMessage(tab.id, { action: "printHi" });
            printCount++;
          } else {
            clearInterval(intervalId);
            intervalId = null;
            printCount = 0;
          }
        }, 3000);
      }
    );
  }
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    printCount = 0;
  }
});
