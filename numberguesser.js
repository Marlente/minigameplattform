let round_number_ng = 0
let player_score = 0
let computer_score = 0


let number_guessing = document.getElementById("submit_guess");
let next_round = document.getElementById("next_round_ng");

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

})

// funtion when pressing next round button



const getWinner = (player, comp, target) => {
    round_number_ng += 1;
    if(Math.abs(player-target)<=Math.abs(comp-target)){
        player_score += 1; return "You win!"}
    else{computer_score += 1; return "Computer wins!"}
}