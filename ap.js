// object 

const { Toffe } = require("./Toffe");

// ager bhot sare obj crete krna ho 
let obj = { 
    name : "Ayush",
    age:29,
    greet: function(){
        console.log("hello,my name"+ this.name);
        
    }
    // its write to writing clean and resuseable code 
}
//  shere resource is called prototype 


console.log(obj);


// make first contuctor funtion , 
// contructor fist letter always capital
// this is a contructor object 👇
function Cap(){
this.name = "Sport Cap",
this.price = 399
this.size  = "xl"
this.fabric = "cotton"
}
 let c = new Cap()
 console.log(c);
 

// ager function ko kabhi bhi call karte waqt tumne new ka use kar liya tutrant man main ek blank object banao 


// jab bhi function mein this ko dekho turant to usse vo blank object ki jagah rakh do.


function Milk(){
    this.name= "cow milk",
    this.type = "fresh",
    this.typeofcow = "hostern"

}

let milk= new  Milk()
let m1 = new Milk("ayush")
console.log(milk.typeofcow, m1);



 let t = new Toffe() 
//  object is the calss of object its using contructor function  



console.log(t);
let t1 = new Toffe("rose", "pink", "salty",299, "big ")
let t2 =   new Toffe("chocolate", "dark", "sweet ",699, "medium ")


console.log(t1);

