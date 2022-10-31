let myFriendsSchedule= {
    sunday: true,
    monday: false,
    tuesday: false,
    wednesday: true,
    thursday: false,
    friday: true,
    saturday: true
};

let myMoneySchedule= {
    sunday: 10,
    monday: 5,
    tuesday: 10,
    wednesday: 15,
    thursday: 16,
    friday: 20,
    saturday: 0
};

const daysOfWeek = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
];


function canWeGoToTheMovies(){
    let whatDaysCanWeGoToTheMovies = [];
    for (var i=0; i < daysOfWeek.length; i++) {
        let dayOfWeek = daysOfWeek[i];
            if (myFriendsSchedule[dayOfWeek] = true && myMoneySchedule[dayOfWeek] > 10){
                whatDaysCanWeGoToTheMovies.push(dayOfWeek)
                console.log("On " + dayOfWeek + "? Yes, lets go to the movies!!");
            } else if 
                (myFriendsSchedule[dayOfWeek] = true || myMoneySchedule[dayOfWeek] > 10){
                whatDaysCanWeGoToTheMovies.push(dayOfWeek)
                console.log("On " + dayOfWeek + "? One of us can go to the movies");
            } else 
                (myFriendsSchedule[dayOfWeek] = false && myMoneySchedule[dayOfWeek] < 10)
                {
                    console.log("On " + dayOfWeek+ "? We can't go to the movies");
            }
        
            }
        return whatDaysCanWeGoToTheMovies
    };
    

console.log(canWeGoToTheMovies());

//the concept of this loop is correct, but the syntax is wrong... It is something with the curly brackets. 
//I seem to not be understanding the rules with them when you are nestling conditions.
