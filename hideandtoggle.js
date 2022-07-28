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