function ap(){
this.name="Ayush"}
let a = new ap()
console.log(a);


// its called Constructor funtion




function ayush(){
    this.name= "om",
    this.home = "Seoni",
    this.student = "yes"


}


let daal = new ayush()
console.log(daal.name);



// contructor funtion is the normal funtion but its use the keyword using this and new so is called contructor funtion.
// define the value using this ➡️keyword and coll with ➡️ new keyword. 

// A constructor function is a normal function that is used to create objects.
// It uses the this keyword to define properties and is called using the new keyword

function govt(){
    this.rule  = "give money take job"
    this.place = "India"
    this.year= 2023
    this.car = "bolero"
}

let give = new govt()
console.log(give.car);





let k= [1,3,4,5,6,7,48]
let p =k.reduce((val,val2)=>{
return val+val2

},0)
console.log(p);


