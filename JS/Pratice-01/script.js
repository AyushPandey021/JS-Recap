// Js pratice Question 
// write "hello" log in 3 types 
console.log("Hello ");
console.warn("hello")
console.error("hello");


console.log(35 * 2 - (10 / 2) + 7);

console.log(typeof null)

// swap 2 variable 
let a = 5
let b = 3
let c
c = a
a = b
b = c
console.log(a, b);

console.groupCollapsed("water filling process ")
console.log("find water container ");
console.log("fill your bottle ");
console.log("go back your seat ");


// 2nd pratice video

// map , filter , reduce 
// map creating new array get the new element the element go trow the map

// ans🎯
// ➡️ MAP
// map is the mathod its itrate in every element in array ,object  map return a element in function and returns the value form of array.
// map is same as forEach but forEach not accept return keyword  in values and in map return is mandetory. without return not work map.
// Map
let  kp = [1,2,3,4,5,6]
let ans = kp.map(function(val){
    return "ayush" + val
})
console.log(ans);
// forEach
let  vp = [1,2,3,4,5,6]
let ok = kp.forEach(function(val){
    console.log(
     "ayush" + val
     );
})
console.log(ok);

// ➡️Filter => filter also return the blank array using function like map but its return the values in boolen condition , if condition true so add in value in array and false it so ignored. 
// filter working same as map but its work on condition based 🎯
let fruist = ["mango", "orange", "Banana", "Lichi"]
let fans = fruist.filter(function(val){
    // if condition false not add any element in array.
    return true
    
    // return val === "mango"
})
console.log(fans);



// ➡️Reduce => 
// reduce is the array mathod its conbine the all element in  array to single value, to performing maths opreations.its taka a collback fucntion with 2 permeter intialvalue , currentvalue ,its mosting performing mathametical opreation in array. 
// Reduce🎯
let arr = [3,4,3,5,546,45,64]

let rans= arr.reduce(function(val1 , val2){
    return val1 + val2
},0)
console.log(rans);


// map , filter , reduce 
// map
 let M = ["op","Cp","gp","kp"]
 let maping  = M.map(function(val){
    return val 
 })
  console.log(maping);
//   Filter 
let filter= [ 1,2,4,5,5,6]
let fil = filter.filter(function(val){
    return val >= 5
})
console.log(fil);
// reduce 


let res = [45,5,6,15,3,7,6]
  
let reduceing= res.reduce(function(val1,val2){
    return val1 * val2
}, 1 )
// adding value 
console.log(reduceing);
let arr1 = [1,2,3,4,5]
let  addition = arr1.reduce(function(val1, val2 ){
    return val1 + val2
}, 0 )

console.log(addition);




// write the number using loop 10 to 1 reverse.🎯
let n = 10 
while(n>0){


    console.log(n)
    n--;
    
}

// print 3 table using while🎯
let i   = 3 
while(i<31){
    console.log(i, "3 multiple" );
    
i+=3
}

// calculate the sum of the numbers from 1 to 100 using a loop.🎯 
let sum  = 0 
for(let i = 1 ; i <101 ; i++){

sum  = sum + i 
}

console.log(sum );

// use a for of loop to iterate over the string "javascript 🎯"
let str = "Javascript "
for (let  i of str){
console.log(i);

}

// remove duplicate an array 🎯
let dup = [1,3,4,24,12,2,4,12,13,1,12,1,1];
let setter = [...new Set(dup)]
console.log(setter);



