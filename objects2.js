let programmerSpecs = {
    firstName: "Lauren",
    lastName: "Whitted", 
    programmingLanguage: "Java Script",
    currentDate: Date(),
    currentDay: "29th",
    currentMonth: "September",
    computerType: "Mac",
    currentYear: "2022"
}
const stringVariable = "firstName"

function mySpecs(programmerSpecs) {
   let myIntro = "Hello! My name is " + programmerSpecs.firstName + " " + programmerSpecs.lastName + 
    " The date is the " + programmerSpecs.currentDay + " of " + programmerSpecs.currentMonth +
    " I am currently learning how to program in " + programmerSpecs.programmingLanguage + "."
  
    return myIntro
  
}   

//console.log(mySpecs(programmerSpecs));

programmerSpecs.programmingLanguage = "Python"

// console.log(programmerSpecs.programmingLanguage);

delete programmerSpecs.computerType
// console.log(programmerSpecs);

//console.log(programmerSpecs.currentMonth);

function myFirstName(programmerSpecs){
    let intro = stringVariable + ": " + programmerSpecs.firstName
    return intro
}
console.log(myFirstName(programmerSpecs));


