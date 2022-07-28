//HIDE AND TOGGLE ELEMENTS
//function to display only the selcted game 
//selection is made by clicking the game name in the header
let ng = document.getElementById("select_ng")
let mcs = document.getElementById("select_mcs")
let rps = document.getElementById("select_rps")

//** default mode
document.getElementById("rockpaperscissors").style.display = "none";
document.getElementById("numberguesser").style.display = "none";
document.getElementById("magicconchshell").style.display = "none";

rps.addEventListener("click", function(){
    document.getElementById("rockpaperscissors").style.display = "block";
    document.getElementById("numberguesser").style.display = "none";
    document.getElementById("magicconchshell").style.display = "none";
    document.getElementById("default").style.display = "none";
    console.log("rockpaperscissors")
    rps.setAttribute("class", "bg-blue-200 px-20")
    mcs.setAttribute("class", "px-20")
    ng.setAttribute("class", "px-20")
})
mcs.addEventListener("click", function(){
    document.getElementById("rockpaperscissors").style.display = "none";
    document.getElementById("numberguesser").style.display = "none";
    document.getElementById("magicconchshell").style.display = "block";
    document.getElementById("default").style.display = "none";
    console.log("magicconchshell")
    rps.setAttribute("class", "px-20")
    mcs.setAttribute("class", "bg-blue-200 px-20")
    ng.setAttribute("class", "px-20")
})
ng.addEventListener("click", function(){
    document.getElementById("rockpaperscissors").style.display = "none";
    document.getElementById("numberguesser").style.display = "block";
    document.getElementById("magicconchshell").style.display = "none";
    document.getElementById("default").style.display = "none";
    console.log("numberguesser")
    rps.setAttribute("class", "px-20")
    mcs.setAttribute("class", "px-20")
    ng.setAttribute("class", "bg-blue-200 px-20")
})

//---------------------------------------------------------------------
// MAGIC CONCH SHELL
//functions to get answers to all the question player wants to ask

let ask_mcs = document.getElementById("ask_mcs");
let count_questions = 0;

ask_mcs.addEventListener("click", function(){
  let question = document.getElementById("question_to_mcs").value;
  console.log(question)
  if (question===""){
    document.getElementById("empty_question").innerHTML="Please insert a Question first.";
  }
  else {
    document.getElementById("empty_question").innerHTML="";
    let question_log = document.createElement("li");
    question_log.appendChild(document.createTextNode(question));
    document.getElementById("question_log").appendChild(question_log);
    let answer_log = document.createElement("li");
    answer_log.appendChild(document.createTextNode(askTheShell()));
    document.getElementById("answer_log").appendChild(answer_log);
    count_questions += 1;
  }

});

const askTheShell = ()=>{
  let randomNumber = Math.floor(Math.random()*8);
  switch (randomNumber){
    case 1: return 'It is certain';   
    case 2: return 'It is decidedly so';    
    case 3: return 'Reply hazy try again';    
    case 4: return 'Cannot predict now';    
    case 5: return 'Do not count on it';    
    case 6: return 'My sources say no';    
    case 7: return 'Outlook not so good';    
    case 8: return 'Signs point to yes';    
    default: return "You will never no";  
  }
}

//---------------------------------------------------------------------
//ROCK PAPER SCISSORS
//function for rules to play RPS

let play_rps = document.getElementById("play_rps");
let count_rps_games = 0;
let count_player_wins = 0;
let count_computer_wins = 0;

play_rps.addEventListener("click", function(){
  let player_name_rps= document.getElementById("name_rps").value;
  document.getElementById("greeting").innerHTML = "Hello " + player_name_rps +", let's play!";
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

//testing purposes
function playGame(){
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}

//---------------------------------------------------------------------
//NUMBER GUESSER    
//function and rules to play number guessing against the computer
let round_number_ng = 0
let player_score = 0
let computer_score = 0

let number_guessing = document.getElementById("submit_guess");

// funtion when pressing make guess button
number_guessing.addEventListener("click", function(){
    let player_guess = document.getElementById("player_guess_ng").value
    let computer_guess = Math.floor(Math.random()*10);
    let target_value = Math.floor(Math.random()*10);
    let result = getWinner(player_guess, computer_guess,target_value);

    document.getElementById("target_number_ng").innerHTML = target_value;
    document.getElementById("winner_ng").innerHTML = result;
    document.getElementById("computer_guess").innerHTML = computer_guess;
    document.getElementById("computer_score_ng").innerHTML = computer_score;
    document.getElementById("player_score_ng").innerHTML = player_score;

    document.getElementById("round_number_ng").innerHTML = round_number_ng.toString();

})

const getWinner = (player, comp, target) => {
    round_number_ng += 1;
    if(Math.abs(player-target)<=Math.abs(comp-target)){
        player_score += 1; return "You win!"}
    else{computer_score += 1; return "Computer wins!"}
}
