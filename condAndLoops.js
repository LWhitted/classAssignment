let toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

let myRoommateToDoList= ["Mop Floors",
    "Clean Bathroom",
    
]

//1. Create a function that logs to the console "You can go play some video games!" 
//if you have less than three chores to do. 
//Have it log "No games! Do some chores" if you have three or more.


function canPlayVideoGames(arrayOfChores) {
    let numberOfChores = arrayOfChores.length;
    if (numberOfChores < 3) {
        console.log("You can go play some video games!")
    } else { 
        console.log("No games! Do some chores!")
    }
};

canPlayVideoGames(toDoList)

 
