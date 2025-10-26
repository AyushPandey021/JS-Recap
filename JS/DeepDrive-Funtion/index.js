// >Deep Drive Function➡️
// We are follow the DRY mathod in industry mathods is called DRY = don't Repeat YourSelf

// what is a Funtion 🎯
// A part of code you use in many times and its runs only the function colling, it is a reuseable part & block of code.

//➡️ function is block of code which you can reuse and run at any 
// point if time


// Why function🎯

//➡️ you are not runing funtion immediately and you reuse the code block in code many times so use funtion

// why need fn🎯 => to resuse some code which is very long to re write 
// how to create a funtion🎯
function ap() {
    console.log("Ayush "
    )
}
ap()

// how to call a function🎯 => function not autometically runable its need to colling, so funtion only runs to coll a function => 
// funtion name and brakets  = Ap()
// 🎯 What is a Parameter?
// A parameter is a temporary variable defined in a function.
// It holds the value (data) passed to the function when it is called.

// how to pass a parameter to a function🎯=> 
function kb(a, b) { ///You pass the value is called perameter
    console.log(
        a, b
    );
}
kb(1, 2, 4) //You return the value is called argumement


// how to pass an argument to a function
// type of funtion🎯=> 6 type of defineing function
// ➡️function Statement => you create normal function so is called.
function kp() {
    console.log("Hello Function Statement  ");
}
kp()
// ➡️ funtion expression=> you create a funtion and store  in variable is called funtion expression.
let fnc = function () {
    console.log("Hello function expression ");

}
fnc()

// ➡️ anonymous Function => that function has been no name 
// async funtion jp(){

// }
// ➡️fat arrow function
let arrow = () => { console.log("hello form fat arrow function"); }
arrow()


// ➡️fat arrow with one Function , if you  useing one perameter to remove the fat in one perameter , and you return the value. 
let abcd = a =>{
    console.log("ayush",a);
    
}
abcd("pandey")
// ➡️fat arrow function with implicit return
let acc = ()=>"ayush implicit"
acc()


// 🎯
// rest parameter 🎯
// hoisting 
// IIFE
// Higher order function
// coll back function 
// frist calss function
// pure function 
// impure function
// global scope
// local scope 
// closures

// 1=>🎯 REST perameter => The Rest Parameter is used in a function to collect multiple arguments into a single array.
// is called rest 
// his return the accepting  value in perameter and remaining val collecting in one array 
    function abd(a,b,c,...val){
console.log(a,b,c,val);

    }
    abd(2,3,4,5,6,7,8)
    // ... is called rest 
// 🎯 Hoisting => 
// Hoisting is a concept in JavaScript where variable and function declarations 
// are moved to the top of their scope before the code is executed.
// It doesn’t actually move the code; it’s just how JavaScript understands and executes it.


console.log(a);
var a = 12


//🎯  Closure = A function that remembers and accesses variables from its outer function’s scope,
// even after the outer function has finished executing.
function outer(x){
    return function inner(y){
        return x+y
        
    }
}
const addfive = outer(5)
console.log(addfive(5));




function i(x){
   return function h(y){
       console.log(       "hello "+ x + y);


    }
// closure is the function its remember the outer function value  and access and store 


}
 let val = i("oM ")

val("Ayush inner ");



// English🎯
// Closure is a function that remembers and accesses variables from its outer function, even after the outer function has finished running.
// It basically stores the outer function’s values and can use them later.

// Hindi🎯
// Closure ek function hota hai jo apne outer function ke variables ko yaad rakhta hai,
// chahe outer function execute ho chuka ho.

// Matlab — function apne outer scope ke data ko store karke baad me use kar sakta hai.