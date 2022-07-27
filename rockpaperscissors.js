let play_rps = document.getElementById("play_rps");
let count_rps_games = 0;
let count_player_wins = 0;
let count_computer_wins = 0;

play_rps.addEventListener("click", function(){
  let player_name_rps= document.getElementById("name_rps").value;
  let player_choice_rps = getUserChoice(document.getElementById("choice_rps").value);
  if(player_choice_rps==="Invalid input"){
    document.getElementById("choice_rps").innerHTML = player_choice_rps;
  }
  else{
    let computer_choice_rps = getComputerChoice();
    let result_rps = determineWinner(player_choice_rps, computer_choice_rps);
    let display_result = document.createElement("li");
    display_result.appendChild(document.createTextNode(result_rps));
    document.getElementById("result_rps").appendChild(display_result);

    changeCountRPS(result_rps)
  }
});


const getUserChoice = function (userInput){
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === "paper" || userInput === "scissors" ){return userInput}
  else {return "Invalid input"}
}

function getComputerChoice(){
  let choice = Math.floor(Math.random()*3)
  if (choice===1){return "rock";}
  else if(choice===0){return "paper";}
  else{return "scissors";}
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice===computerChoice){return "It's a tie."}
  if(userChoice==="rock"){
    if(computerChoice==="paper"){return "You lose"}else{return "You win"}
  }
  if(userChoice==="paper"){
    if(computerChoice==="scissors"){return "You lose"}else{return "You win"}
  }
  if(userChoice==="scissors"){
    if(computerChoice==="rock"){return "You lose"}else{return "You win"}
  }
}

const changeCountRPS = (result) => {
  if(result==="You win"){count_player_wins+=1;}
  if(result==="You lose"){count_computer_wins+=1;}
  count_rps_games+=1;

  document.getElementById("games_rps").innerHTML = count_rps_games.toString();
  document.getElementById("player_wins_rps").innerHTML = count_player_wins.toString();
  document.getElementById("computer_wins_rps").innerHTML = count_computer_wins.toString();
}

function playGame(){
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}