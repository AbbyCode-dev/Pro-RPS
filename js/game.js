// For the header
const close = document.querySelector(".close");
const open = document.querySelector(".open");
const list = document.querySelector(".list");
const sidebarContainer = document.querySelector(".sidebar-container");
const overLay = document.querySelector(".overlay");

// To display the sidebar by clicking the hamburger icon =
open.addEventListener("click", () => {
  sidebarContainer.classList.add("show-sidebar");
  overLay.classList.add("show-overlay");
});

// To close the sidebar by clicking the close icon x
close.addEventListener("click", () => {
  sidebarContainer.classList.remove("show-sidebar");
  overLay.classList.remove("show-overlay");
});

// To close the sidebar by clicking the overlay background
overLay.addEventListener("click", () => {
  sidebarContainer.classList.remove("show-sidebar");
  overLay.classList.remove("show-overlay");
});

// For the Game

const gameLimit = 5;
let gameOver = false;

let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lose: 0,
  tie: 0,
};

UpdateScoreElement();

if (score.win >= gameLimit || score.lose >= gameLimit) {
  gameOver = true;
}

function playGame(playerMove) {
  if (gameOver) {
    return; // Stop the game if already finished
  }
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "You Tie";
    } else if (computerMove === "paper") {
      result = "You Win";
    } else if (computerMove === "scissors") {
      result = "You Lose";
    }
  }

  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win";
    } else if (computerMove === "paper") {
      result = "You Tie";
    } else if (computerMove === "scissors") {
      result = "You Lose";
    }
  }

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose";
    } else if (computerMove === "paper") {
      result = "You Win";
    } else if (computerMove === "scissors") {
      result = "You Tie";
    }
  }

  if (result === "You Win") {
    score.win += 1;
  } else if (result === "You Lose") {
    score.lose += 1;
  }
  if (result === "You Tie") {
    score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  UpdateScoreElement();

  document.querySelector(".js-result").innerHTML = `${result}`;

  // Check game limit
  if (score.win === gameLimit) {
    document.querySelector(".js-result").innerHTML = "🎉 You won the game!";
    gameOver = true;
  } else if (score.lose === gameLimit) {
    document.querySelector(".js-result").innerHTML =
      "💻 Computer won the game!";
    gameOver = true;
  }

  document.querySelector(".js-move").innerHTML =
    `<div>You <img src="./img/${playerMove}-emoji.png" class="move-icon"></div> <div><img src="./img/${computerMove}-emoji.png" class="move-icon">Computer</div>`;

  // alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result}
  //   Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`);
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
function UpdateScoreElement() {
  document.querySelector(".js-score").innerHTML =
    `Win: ${score.win}, Lose: ${score.lose}, Tie: ${score.tie}`;
}

// For Help section
const helpLink = document.querySelectorAll(".link");
helpLink.forEach((anchor) => {
  anchor.addEventListener("click", () => {
    document.getElementById("helpModal").style.display = "flex";
  });
});
function closeHelp() {
  document.getElementById("helpModal").style.display = "none";
}
// window.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     sidebarContainer.classList.remove("show-sidebar");
//     overLay.classList.remove("show-overlay");
//   }
// });
