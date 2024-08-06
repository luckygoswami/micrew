document.getElementById("go_search").addEventListener("click", () => {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "runScript" });
      });
      console.log("resquest send");
    }, i * 7000);
  }
});
