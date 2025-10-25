let a = `WhatsApp`//string 
let b = a.slice(0, 5)
// ➡️➡️
console.log(b, `this is the value ${2 + 4}`);
// work on template literals , how is it useing and working
// `` backtick , tampate literals
let str = "This is a Splice method"
console.log(
    str.split("h"));
// aap jo bi value dalte h jha jha vo value   string me ayegi value slice ho jaygi  

// ➡️➡️
let ap = "Ayush"
// its help to replace the value 
console.log(ap.replace("Ayush", "Chotu"));

// ➡️➡️
let val = "Hello js Learner"
// check the value its present or not in variable, space also count 
console.log(val.includes("er"));
// ➡️➡️
// canditional statement 
age = 18 
if (age > 18){
    console.log("Yes you are eligible");
    
}else if( age == 18 ){
console.log("your age equal to 18 ");

}
else{
    console.log("No you are not eliglible");}
    // ➡️➡️ tarnary opreator 
let speed  = 20 
let p = speed > 18 ? "This statement is True " : "This Statement is False"
console.log(p);
//   ➡️➡️ switch case opreator
// match the case with any switch to code has been run but if not match any case to run the default code 
switch("Ayush"){
    case "yash":
        console.log("I am Yash");
        break;
    case "Krish":
        console.log("I am Krish");
        break;
    case "vivek":
        console.log("I am Vivek");
        break;
    case "Ayush":
        console.log("I am Aysuh");
        break;
        default:
            console.log("Not Name has been matched");
            
        
}
// ➡️➡️ for  loop 
//  for loop in array , is called dynamic loop also, its colling only the length of array its not fixed 
let arr = [ 1,2,3,4,5]
for(let a = 0; a<arr.length; a++){
    console.log("hey from arr", a );}
    // Normal intreation for loop 
for(let x = 0 ; x<6; x++){
    console.log("Count", x);
    
}

// ➡️➡️ while loop 
 
// its runing until the true 
let i = 1; // start

while(i<12){
    console.log(i);// code
    
    
    
    i++// change
}

// ➡️➡️ do while
let k = 5
do{
console.log(" do is runing one time ", k);
k++

}
while(k<10)

    // ➡️➡️ breake & Continue
    // this loop in runing 12 to 23 my condition is if the loop i == to 15 so break it the condition. is called break
    for(let i = 12;i <23; i++){
        console.log(i);
        if(i == 15){
            console.log("15 is come end Break the statement ");
            // break use to stop the loop 
            break
           
            
        }
       
    
        
    }
    // continue
    for(let l=5 ; l < 20 ; l++){
         if(l == 16)
        continue; 
    // continue skip the loop 
    console.log("16 skip and continue" ,l);
  
        

    }