// Create 2 array variables. One with only strings and the other with only numbers.
// The string array will have our firstName, lastName, and programming language
const myFacts = [
    "Lauren",
    "Whitted",
    "JavaScript"
];

const today = [10, 1, 2022];

function myIntro(myFacts, today){
    let intro = "Hi, my name is " + myFacts[0] + " " + myFacts[1] + ". I am currently learning " + myFacts[2] + ". Today's date is " + today[0]+ "/" + today[1] + "/" + today[2] + "."
    return intro
}

// console.log(myIntro(myFacts, today));

myFacts.push("30");
today.push(2023);
myFacts[2] = "HTML/CSS";
// console.log(myFacts[2]);
console.log(myFacts.length);
console.log(today.length);

