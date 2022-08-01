var fruits = ["Apple", "Banana", "Orange"];

//find the index num of banana
var bananaIndexNumber = fruits.indexOf("Banana");

//replase banana to mango
fruits[bananaIndexNumber] = "Mango";

//remove the last valu of the array
fruits.pop("Orange");

//add a last valu of the array
fruits.push("Watermelon");

console.log(fruits);