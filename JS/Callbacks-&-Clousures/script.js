// CallBack & Clousers Question 🎯

//🎯 What is SetTimeout() & setIniterval() use and diffrence ? 
//➡️ setTimeout()=> its js Built in  function only run in one time,  write your code and set the time to runing  in miliseconds, than delay completed your code  is runing.

console.log("Start");

setTimeout(() => {
  console.log("This runs after 3 seconds!");
}, 3000);

console.log("End");

//➡️ setInterval()=> setInterval() is a built-in JavaScript function that executes a given function repeatedly  excute a time interval, its not stoped its continue runing, its only manuallay stop using clearInterval().
//
let count = 1;

const timer = setInterval(() => {
  console.log("Counting:", count);
  count++;

  if (count > 5) {
    clearInterval(timer);
    console.log("Timer stopped!");
  }
}, 1000);

// Questions ✅
// 🎯Create a function that take another function as an argumemnt and calls it after 3 second (HOF + callback)
let fnc=(val)=>{
setTimeout(() => {
    val()
}, 5000);
}

fnc(function(){
    console.log("Tu jane naa in 5 second");
    
})


//  implement you own version of .map() as HOF✅
let kp = [4,5,6,7,8,9]
let b = (val , v1)=>{
    let anew = []
    for(let   i = 0 ;i<val.length;i++){
        anew.push(v1(val[i]))

    }
    return anew

}

let ns = b(kp,(val)=>{
    return val +2


})
console.log(ns);


// write a  function that uses closures to create a counter✅
let counter= ()=>{
    let c = 0 
    return ()=>{
        c++
        console.log(" Clouser Counter : ",c);
        
    }
}
let mark= counter()
mark() //1
mark() //2
mark()//3
mark()//4


// implement a function that limits how many times another function can be called (Clousers + HOF).
let limitme=(fn,limit)=>{
let l = 0
return ()=>{
    if(l<limit){
        l++
        fn()
    }else{
        console.log(
        "Limit Reached"
        );
    }
}
}
let limiter = limitme(function(){
    console.log("tujhe me bhula ni");
    
},2)// its set the limit in 2 times means its only colling in 2 times 
limiter()
limiter()
limiter()

