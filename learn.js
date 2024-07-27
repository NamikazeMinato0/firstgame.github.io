let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const body = document.querySelector("body");
const btn = document.querySelector("button");
const scr = document.querySelector(".score-board")
let mode = "light";
btn.addEventListener("click", ()=> {
if (mode === "light") {
  mode = "dark"
  body.style.backgroundColor = "black";
  scr.style.color = "white";
  choices.style.backgroundColor = "white";
 } else {
  mode ="light"
  body.style.backgroundColor = "white";
  scr.style.color = "black";
}
}
)

const genCompChoice = ()=> {
  const options = ["rock","paper","scissor"];
  const randIdx= Math.floor(Math.random() * 3);
  return options[randIdx];
}
const drawGame= () => {
  msg.innerText = "Game was Draw"
  msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green"
  }else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor = "red"
  }
}

const playGame = (userChoice) => {
  console.log("user choosed =>",userChoice);
  const compChoice = genCompChoice();
  console.log("comp choosed =>",compChoice)
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
  
}

choices.forEach((choice)=> {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})
