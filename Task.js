class usr{
constructor(fullname, place , number){
    this.fullname =fullname,
    this.place= place,
    this.number = number
}

say(){
    console.log(`Your Fullname is : ${this.fullname} and you are from ${this.place} if i contact you so your contact number ${this.number}`);
    


}


}
let user= new usr("Manas Rajan", "Odisha", 9744874158)
user.say()



// A constructor is a special function inside a class or constructor function that is automatically called when you create a new object using the new keyword.
// It is used to initialize (assign) values to the object’s properties using the this keyword.
// When you use new, JavaScript automatically creates a new object and links it to this.
//➡️ Constructor + new + this = new object with initialized values



// encapshulation 
// innheritance
// polymorphism 
// abestraction

let copy = ["Ayush", "kumar",["Kishore"]]
const User = {
  name: "Ayush",
  address: { city: "Bhopal", state: "MP" }
};

// Deep copy using structuredClone
const deepCopy = {...User}

// let shollow =[...copy]
// let = ={...obj}
console.log(deepCopy);



// distructureing


const distructure = {class: "LowerClass", leng:"DownToEarth"}
const lenguage = distructure.leng
const classy = distructure.class
console.log(lenguage);
console.log(classy);
console.log(distructure);






let ages = [1,2,3,4]
let [one, two, three, four ] = ages


console.log(one);
console.log(two);
console.log(three);
console.log(four);


// destructing is the feature in js that allow to you to get the values form array and define in value in new  seprate varible in short easy way.




async function dp((res,rej)=>{
    await 
})
