chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "printHi") {
    console.log("hi");
  }
});
