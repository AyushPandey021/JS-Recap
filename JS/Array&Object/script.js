// Topics
// Array & Object 
// 🎯Array is the special type of object used to store multiple values in a single variable 
let a = [1, 2, 3, 4]
console.log(a);


// what is array ?  
// ➡️array is data structure which can store multiple values all at one place
let fruits = ["mango ", "graphs", "Banana", "Watermelon"]
console.log(fruits);

// why array➡️ ? -> for storeing multiple values in single variable 
// who uses array ➡️  ? ->developer use the array in development
// when to use array ➡️? -> in the js code 
// how to use array➡️ ? 
//  how to create array 
let num = [1, 2, 4, "ap", true, 5, function bb() {
    console.log("Ayushman");

}]
console.log(num[6]());

//  how to access members of array



let arr = new Array(100)//=> this mathod to use  if you creating large size array  , put the value in array autometcally creating array that size.
console.log((arr));

// here is the array with loop add array value in to 0 to  29 
var app = new Array(30)
for (let i = 0; i < 30; i++) {
    app[i] = i
}
console.log(app);



//object🎯
//  what is obj =>
    // “An object in JavaScript is a collection of key-value pairs used to store and organize data.”
  //=> this is only the mathod to define key values pairs to hold values
//   its a collection of key vlaues pair
ap = {
    ayush: "pandey",
    batch: 29,
    place: "Hyderabad"

}
// why obj🎯=> Object is used to store related data about one thing in a structured way using key–value pairs.
// when to make an Object=> when your want to store the info of one entity.
// how to createing way of object => 
    var obj = {} //way1 
var obj2 = new Object() //way2
// how to access and object=>
    let student = {
        name:"madhu",
        class:"10th",
        place: "Hyderabad",
        age:15,
        phone:546548965
    }

student["place"] = "Delhi"// update value


console.log(student.place) // acess value



console.log("class" in student); // check key 



var marge = {...ap, ...student} // marged 2 obj 
console.log(marge);

