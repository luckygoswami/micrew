chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "runScript") {
    console.log("script started");
  }
});
