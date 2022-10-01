let toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]
//you want to use let here instead of const in order to change
//the number of chores in the loop below
//4. Create a while loop that removes elements from the array until there are two left. 

let numberOfChores = toDoList.length;

while (numberOfChores >2) {
    toDoList.pop();
    numberOfChores = toDoList.length;
}

console.log(toDoList);
