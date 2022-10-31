// Lets make a function that lets us know when we can go to the movies with our friend
// Create an object called myFriendsSchedule that has our friends schedule the key/value pair should be day_of_week and a true/false value i.e. { sunday: true }

let myFriendsSchedule= {
    sunday: true,
    monday: false,
    tuesday: false,
    wednesday: true,
    thursday: false,
    friday: true,
    saturday: true
}

// Create an object called myMoneySchedule that has how much money I have during the week 
//the key/value pair should be day_of_week and a number value i.e. { sunday: 10 }

let myMoneySchedule= {
    sunday: 10,
    monday: 5,
    tuesday: 10,
    wednesday: 15,
    thursday: 16,
    friday: 20,
    saturday: 25
}
// Create a function called canWeGoToTheMovies with a parameter that takes a string value, 
//the value will be the day of the week
// create an if statement for myFriendsSchedule and myMoneySchedule.
// Using bracket notation lookup the day of the week for both objects, 
//find out if my friend is free AND I have the money

function canWeGoToTheMovies(day_of_the_week) {
    if(myFriendsSchedule[day_of_the_week] = true && myMoneySchedule[day_of_the_week] > 10) {
        console.log("I am free to go out");
    } else {
        console.log("I can't go out today");
    }
};

canWeGoToTheMovies("monday");