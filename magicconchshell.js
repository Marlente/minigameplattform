
let ask_mcs = document.getElementById("ask_mcs");
let count_questions = 0;

ask_mcs.addEventListener("click", function(){
  let question = document.getElementById("question_to_mcs").value;
  console.log(question)
  if (question===""){
    document.getElementById("empty_question").innerHTML="Please insert a Question first.";
  }
  else {
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
