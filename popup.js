const searchCount = document.getElementById("searchCount");
const searchInterval = document.getElementById("searchInterval");
const searchBtn = document.getElementById("go_search");
const countValue = document.getElementById("countValue");
const intervalValue = document.getElementById("intervalValue");
const completeSearch = document.getElementById("completeSearch");

searchBtn.addEventListener("click", () => {
  for (let i = 0; i < parseInt(searchCount.value); i++) {
    setTimeout(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "runScript" });
      });
      console.log("search request send");
      completeSearch.textContent = i + 1;
    }, i * (parseInt(searchInterval.value) * 1000));
  }
});

countValue.textContent = parseInt(searchCount.value);
intervalValue.textContent = parseInt(searchInterval.value);

searchCount.addEventListener("input", (e) => {
  countValue.textContent = e.target.value;
});

searchInterval.addEventListener("input", (e) => {
  intervalValue.textContent = e.target.value;
});
