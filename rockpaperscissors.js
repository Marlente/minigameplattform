let rps = document.getElementById("play_rps");
rps.addEventListener("click", function(){
    let playername= document.getElementById("name_rps").value;
    let player_choice_rps = getUserChoice(document.getElementById("choice_rps"));
    if(player_choice_rps==="Invalid input"){
      document.getElementById("choice_rps").innerHTML = player_choice_rps;
    }
    else{
      let computer_choice_rps = getComputerChoice();
      let result_rps = determineWinner(player_choice_rps, computer_choice_rps);
      let display_result = document.createElement("li");
      display_result.appendChild(result_rps);
      document.getElementById("result_rps").appendChild(display_result);
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

function playGame(){
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));

}