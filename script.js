const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");
const ruleButton = document.getElementById("ruleButton");
const gameRules = document.querySelector(".gameRules");
const parentButton = document.querySelector(".parent_button");
const playAgain = document.querySelectorAll(".playAgain");
const allClass = document.querySelectorAll(".allClass");
const nextButton = document.getElementById("nextButton");
const optionArray = ["stone", "scissor", "paper"];

var computerScoreCount = 0;
var playerScoreCount = 0;

// Initialize the scores from localStorage when the page loads
function initializeScores() {
  computerScoreCount = localStorage.getItem("computerScore") || 0;
  playerScoreCount = localStorage.getItem("playerScore") || 0;

  computerScore.textContent = computerScoreCount;
  playerScore.textContent = playerScoreCount;
}

initializeScores();

function updateLocalStorage() {
  localStorage.setItem("computerScore", computerScoreCount);
  localStorage.setItem("playerScore", playerScoreCount);
  computerScore.textContent = computerScoreCount;
  playerScore.textContent = playerScoreCount;
  parentButton.style.display = "none";
}

function options(playerOption) {
  var computerOption =
    optionArray[Math.floor(Math.random() * optionArray.length)];
  // allClass[0] to allClass[1] represents
  // allClass[0] scissorStone,
  // allClass[1] paperScissor,
  // allClass[2] stonePaper,
  // allClass[3] rockScissor,
  // allClass[4] paperRock,
  // allClass[5] scissorPaper,
  // allClass[6] paperPaper,
  // allClass[7] stoneStone,
  // allClass[8] scissorScissor buttons

  if (playerOption === "scissor" && computerOption === "stone") {
    allClass[0].style.display = "flex";
    toggleNextButton(0);
    computerScoreCount++; // Computer wins
  } else if (playerOption === "paper" && computerOption === "scissor") {
    allClass[1].style.display = "flex";
    toggleNextButton(0);
    computerScoreCount++; // Computer wins
  } else if (playerOption === "stone" && computerOption === "paper") {
    allClass[2].style.display = "flex";
    toggleNextButton(0);
    computerScoreCount++; // Computer wins
  } else if (playerOption === "stone" && computerOption === "scissor") {
    allClass[3].style.display = "flex";
    toggleNextButton(1);
    playerScoreCount++; // Player wins
  } else if (playerOption === "paper" && computerOption === "stone") {
    allClass[4].style.display = "flex";
    toggleNextButton(1);
    playerScoreCount++; // Player wins
  } else if (playerOption === "scissor" && computerOption === "paper") {
    allClass[5].style.display = "flex";
    toggleNextButton(1);
    playerScoreCount++; // Player wins
  } else if (playerOption === "paper" && computerOption === "paper") {
    allClass[6].style.display = "flex";
    toggleNextButton(0);
    // It's a tie
  } else if (playerOption === "stone" && computerOption === "stone") {
    allClass[7].style.display = "flex";
    toggleNextButton(0);
    // It's a tie
  } else if (playerOption === "scissor" && computerOption === "scissor") {
    allClass[8].style.display = "flex";
    toggleNextButton(0);
    // It's a tie
  }

  updateLocalStorage();
}
function toggleNextButton(showButton) {
  nextButton.style.display = showButton === 0 ? "none" : "block";
}
// Toggle game rules visibility
function showRules(showRules) {
  gameRules.style.display = showRules === 0 ? "none" : "block";
}

playAgain.forEach((button) => {
  //when play button is clicked this function get's triggered!
  button.addEventListener("click", () => {
    // Reset the button UI for the next game ie show's stone,paper,scissor selection
    parentButton.style.display = "flex"; // Show options again
    ruleButton.style.display = "block";
    allClass.forEach((div) => (div.style.display = "none")); // Hide the result of the outcomes if needed
  });
});

