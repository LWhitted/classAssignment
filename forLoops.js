let toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]
//2. Write a for loop that removes elements from the array until there are none left.
let numberOfChores = toDoList.length;
// you can also do const numberOfChores and it is the same. we need to do this first so
//so th loop keeps this variable constant.

for (var i=0; i < numberOfChores; i++) {
    toDoList.pop();
    console.log(toDoList);
}
    //you can also do console.log(toDoList.pop()) to show what is popped until the loop
    //closes


//3. Change the for loop to remove elements from the array until there are two left. 
//to run this properly you need to delete the above loop
for (var i=toDoList.length; i > 2; i--){
    console.log(toDoList.pop());
}
