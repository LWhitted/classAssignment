let newObject = {
    fullName: "Lauren Whitted" ,
    age: 30,
    faveColor: "Green",
    likesPizza: true
}

let favoriteColor = newObject.faveColor;

newObject.fullname = "Whitted";

delete newObject.likesPizza;

newObject.likesCookies = true;
console.log(newObject);

