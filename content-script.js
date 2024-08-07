chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "runScript") {
    script();
  }
});

function script() {
  const input = document.getElementById("sb_form_q");
  const searchBtn = document.getElementById("sb_form_go");

  input.textContent = `a${input.value}`;
  searchBtn.click();
}
