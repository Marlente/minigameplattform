##Project MiniGamePlattform

###PLANNING
Frankly I had to build this feature under pressure within a couple of days next to my full time job, taking into account that my skills just start to accelerate my options where somewhat limited. But I think small games are pretty good examples to demonstarte logic and I think I learned a lot in this project.

The idea was to provide a simplistic page where users can play games. I came up with RockPaperScissores (=RPS) and the Magic Conch Shell (=MCS) in the first place, and then added the numbe guessing game (=NG). 

As for my tools I used VScode to code, Warp command primer to use git version control features and Chrome browser to test locally.

###BUILDING
First I created the basic layout in HTML and initialized my working environment inluding tailwind CSS styling features. I built one game after another starting with the HTML elements (to get their Id's correctly) and then in parallel build a JavaScript file for the functionalities. To decompose the project I started with a separate .js file for each game, this made overview and testing easier for me. After finishing the logic of the games I began styling the website with tailwind CSS. Further I implemeted a logic for hiding and showing the games depending which one is selected. 

###DEBUGGING
To debug my scripts while coding I build in `concole.log()` command in my functions (that were deleted later). Then I tested the page and checked with the Chrome inspection tool what happens while executing. For some features I build functions to test it without user input for instance the `function playGame()` to test the RPS game.

