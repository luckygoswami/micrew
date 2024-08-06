chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "runScript") {
    script();
  }
});

function script() {
  const input = document.getElementById("sb_form_q");
  const searchBtn = document.getElementById("sb_form_go");
  input.textContent += `a`;
  searchBtn.click();
}

// function script() {
//   chrome.storage.local.set({ numero: "hey dude how are you" }).then(() => {
//     console.log("value set");
//   });
//   for (let i = 0; i < 5; i++) {
//     console.log(`from script ${i}`);
//   }

//   chrome.storage.local.get(["numero"]).then((res) => {
//     console.log(`value is ${res.key}`);
//   });
// }
