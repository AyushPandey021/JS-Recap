// Async video 3 🎯




// Food Delivery Mathod 🎯
// some time food deliverd some time not 
let food = new Promise((res,rej)=>{
    return setTimeout(() => {
        let time = Math.random() >.7
        if(time){
            res()
        }else{
            rej()
        }
    }, 2000);
})
food.then(()=>{

    console.log("Pizza Deliverd✅");
    
}).catch(()=>{
    console.log("Pizza Not Deliverd ❌");
    
})

// chained Promies : user -> Posts -> comments
// 1. Create getUser()-> resolves with {id: 1,name: "Ayush"}
// 2. getPosts(userId) -> Reslove with list of post titles
// getCommets(postID)-> resolve with Comments
// chain them together useing .then() and log the final output
// 1st funtion
function getUser(){
    return new Promise((res,rej )=>{
setTimeout(()=>{
    setTimeout(() => {
        res({id:1,name:"Ayush"})
    }, 2000);

})
    })
}
// 2nd funtion

function getPosts(userId){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(['title 1', 'title 2'])
        }, 1000);
    })}
// 3rd function
function getCommets(id){
    
 return new Promise((res,rej)=>{
        setTimeout(() => {
            res("Great Post", "Love it", "Looking Good")
        }, 1000);
    })
}
getUser().then((data)=>{
    console.log(data);
   return  getPosts(data.id)
    
}).then((titiles)=>{
    console.log(titiles);
  return getCommets("adfsasdf")  
}).then(function(cmts){
    console.log(cmts);
    
})
.finally(()=>{
    console.log("All data fetched");
    
})




// task 
// write a funtion fakseAPI(endpoint) that: 
// Accept a String  Like "users" or "Posts "
// Reslove with Some dummy Data after A Random delay (1-3sec)

function fakeApiCall(endpoint){
   let data = {
      users  :["piyush", "ap", "dp"],
     posts : ["Hey champs", "Greate doing everyone", "lets build this" , "lets rock" ]
   }

 let delay =    Math.random()* 2000  + 1000
    return new Promise((res,rej)=>{
setTimeout(() => {
    console.log(data[endpoint]);
    
}, delay);
    })
} 
fakeApiCall("users").then((data)=>{
console.log(data);

})
fakeApiCall("posts").then((data)=>{
console.log(data);

})