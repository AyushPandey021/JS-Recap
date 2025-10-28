// event handling

let h1 = document.querySelector("h1")
let btn =document.querySelector("button")
let h2 =document.querySelector("h2")
let btn2 =document.querySelector(".btn2")
let from =document.querySelector("form")
let ul =document.querySelector("ul")

btn.addEventListener("click",function(){

    h1.style.backgroundColor = "yellow"
})
btn2.addEventListener("click",function(){
    h1.style.backgroundColor = "crimson"
})

// event  object 
let abc = document
// prevent default use 🎯
from.addEventListener("submit",function(e){
e.preventDefault()
})



// Event bubling 🎯
//➡️you click one element its not have any addEventListener so event move his present element to findlistener and if perent have no addEventListener so event move the his present also  and moveing perent to perent for finding listerner, its moveing called add event listerner.
// 🎯 event buble example
ul.addEventListener("click",function(dets){
    // alert("its clicked ")
    dets.target.style.cursor=  "pointer"
    dets.target.style.textDecoration=  "line-through"
    

})

// ➡️.event catureing => this  is opposite to event bubling  , bubling go child to perent , captureing perent to child
