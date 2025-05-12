const textDisplay = document.getElementById("textDisplay");
const textInput = document.getElementById("textInput");
function updateDisplay(text) {
  textDisplay.innerHTML = "";
  let currentFontSize = 500;
  const words = text.trim().split(/\s+/);
  const lineContainer = document.createElement("div");
  lineContainer.className = "line-container";
  words.forEach(word => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "letter";
    wordSpan.textContent = word;
    lineContainer.appendChild(wordSpan);
  });
  textDisplay.appendChild(lineContainer);
  lineContainer.style.fontSize = currentFontSize + "px";
  while (
    (textDisplay.scrollHeight > textDisplay.offsetHeight ||
    textDisplay.scrollWidth > textDisplay.offsetWidth) &&
    currentFontSize > 10
  ) {
    currentFontSize -= 5;
    lineContainer.style.fontSize = currentFontSize + "px";
  }
}
textInput.addEventListener("input", function(e) {
  updateDisplay(e.target.value);
});
document.getElementById("normalModeButton").addEventListener("click", function() {
  document.body.classList.remove("dark-mode");
  document.body.style.backgroundColor = "#FFFFFF";
  document.body.style.color = "#000000";
});
document.getElementById("colorButton").addEventListener("click", function() {
  document.body.classList.remove("dark-mode");
  document.body.style.backgroundColor = "#8ACE00";
  document.body.style.color = "#000000";
});
document.getElementById("darkModeButton").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
  } else {
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "#000000";
  }
});