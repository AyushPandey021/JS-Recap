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
 switch(3){
    case 1 :
        console.log("This is One switch");
        
        break;
    case 2:
        console.log("This is Two switch");
        
        break;
    case 3:
        console.log("This is Three switch");
        
        break;
    default: 
    console.log("Not Match switch ");
    
    // 
 }