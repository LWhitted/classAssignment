let programmerSpecs = {
    firstName: "Lauren",
    lastName: "Whitted", 
    programmingLanguage: "Java Script",
    currentDate: "29th",
    currentMonth: "September"
    ComputerType: "Mac"
}
const stringVariable = "firstName"

function mySpecs(programmerSpecs) {
    console.log(`Hello! My name is ` + programmerSpecs.firstName + + programmerSpecs.lastName);
    console.log(`The date is the` + programmerSpecs.currentDate+ of + programmerSpecs.currentMonth);
    console.log(`I am currently learning how to program in` +programmerSpecs.programmingLanguage+);
programmerSpecs.programmingLanguage = "python";
console.log(programmerSpecs.programmingLanguage); 
}   