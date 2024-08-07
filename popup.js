const searchCount = document.getElementById("searchCount");
const searchInterval = document.getElementById("searchInterval");
const searchBtn = document.getElementById("go_search");
const intervalValue = document.getElementById("intervalValue");
const completeSearch = document.getElementById("completeSearch");

function getTwoRandomLetters() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex1 = Math.floor(Math.random() * alphabet.length);
  const randomIndex2 = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex1] + alphabet[randomIndex2];
}

searchBtn.addEventListener("click", () => {
  // changes the current tab url to bing.com
  chrome.tabs.update({
    url: `https://www.bing.com/search?go=Search&q=${getTwoRandomLetters()}+stock+price&qs=ds&form=QBRE`,
  });

  for (let i = 0; i < parseInt(searchCount.value); i++) {
    setTimeout(() => {
      // --to run script through content.js
      // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      //   chrome.tabs.sendMessage(tabs[0].id, { action: "runScript" });
      // });

      // --to run script right from this file
      chrome.tabs.update({
        url: `https://www.bing.com/search?go=Search&q=${getTwoRandomLetters()}+stock+price&qs=ds&form=QBRE`,
      });

      completeSearch.textContent = i + 1;
    }, i * (parseInt(searchInterval.value) * 1000));
  }
});

// show count and interval value
countValue.textContent = parseInt(searchCount.value);
intervalValue.textContent = parseInt(searchInterval.value);

// changes search counts dynamically
searchCount.addEventListener("input", (e) => {
  if (e.target.value == 1) {
    document.querySelector(
      ".count-div p"
    ).innerHTML = `search count: <span id="countValue"></span>`;
  } else {
    document.querySelector(
      ".count-div p"
    ).innerHTML = `search counts: <span id="countValue"></span>`;
  }

  // using document.queryselector because on using variable reference it's not working
  // as variable reference remains same in memory and the element changes
  document.querySelector("span#countValue").textContent = e.target.value;
});

// changes search interval dynamically
searchInterval.addEventListener("input", (e) => {
  intervalValue.textContent = e.target.value;
});
