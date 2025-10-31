// aysnc video 2 🎯
// ➡️sync -> collback queue -> main thread execution
//➡️ async -> side stack -> collback -> (if the coll stack empty) -  collback -> main stack

// function get(name,cd ){

// setTimeout(() => {
//     console.log("sending the data");
//     }, 2000);
//     setTimeout(() => {
//         console.log("Fetching the data ");
        
//     }, 1000);
//     setTimeout(() => {
//         console.log("Instagram User data.. ");
//         cd()
//     }, 2000);
    

// }
// get("Ayush Bhau", function(){
// console.log("Data saved in Gallary");

// })







function one(v){
    console.log("one");
    v()
    
}
function two(v){
    console.log("Two");
    v()
    
}
function Three(v){
    console.log("Three");
    v()
    
}
// ➡️➡️what is a coll back hill
// 🎯collback return inside a coll back is called collback hill.
one(()=>{
    two(()=>{
        Three(()=>{
            console.log("Completed✅ ");
            
        })
    })
})


// promies
// promies handle the request ,like fetch request 
// promies also return 2 condition 
// than contain runable code 
// catch contain error part
// reslove -> runs -> than code part 
// reject -> runs -> catch code part




// promies

function step1(){
    return new Promise((res,rej)=>{
        console.log("Step 1 ");
      
rej()
    })
    
}

function step2(){
    console.log("Step 2");
    
}
function step3(){
    console.log("Step 3");
    
}

step1().then(step2).then(step3).then(()=>{
    console.log("All task completed");
    
}).catch(()=>{
console.log("not doing");

})




// pizza geting by promies

let getmyPizza= new Promise((res,rej)=>{

    let pizza = false
    if(pizza){
        res(console.log(
        "I am getting my Pizza"));
    }else{
                rej( console.log(
                "I am not  getting my Pizza")
                );
    
    }
})
getmyPizza.then((message
)=>{
console.log(message);

}).catch((error)=>{
    console.log(error);
    
})


// promies ans 🎯
// A promies is an object in javascript that represents the eventual completion or failure in from of reslove & reject. 
// its has 3 state , reslove , reject , pending it help to avoid collback , promies using to than for reslove , catch for reject , finally for pending 
// ✅its perfrom  to  asynchronous task 