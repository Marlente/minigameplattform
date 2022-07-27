let userChoice= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box-name").value + ", " + document.getElementById("comment-box-email").value + ":";
 
    var li1 = document.createElement("li");
    var text1 = document.createTextNode(commentBoxValue);
    li1.appendChild(text1);
    document.getElementById("unordered").appendChild(li1);

    var commentBoxComment= document.getElementById("comment-box-comment").value;
 
    var li2 = document.createElement("li");
    var text2 = document.createTextNode(commentBoxComment);
    li2.appendChild(text2);
    document.getElementById("unordered").appendChild(li2);
 
});


const getUserChoice = function (userInput){
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === "paper" || userInput === "scissors" ){return userInput}
  else {console.log("Invalid input")}
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