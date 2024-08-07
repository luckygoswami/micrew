chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "runScript") {
    script();
  }
});

function getTwoRandomLetters() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex1 = Math.floor(Math.random() * alphabet.length);
  const randomIndex2 = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex1] + alphabet[randomIndex2];
}

function script() {
  // const input = document.getElementById("sb_form_q");
  // const searchBtn = document.getElementById("sb_form_go");
  // input.textContent = `${getTwoRandomLetters()} stock price`;
  // searchBtn.click();
}
