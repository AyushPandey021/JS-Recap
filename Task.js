// Max
function findmax(n) {

  let maxi = n[0]
  for (let i = 0; i < n.length; i++) {
    if (n[i] > maxi) {
      maxi = n[i]
    } }
  return maxi}
console.log(findmax([2, 3, 4, 5, 67, 354]));

// Min
function maxafind(a) {
  let mini = a[0]
  for (let i = 0; i < a.length; i++) {
    if (a[i] < mini) {
      mini = a[i]
    }
  }
  return mini
}
console.log(maxafind([3, 4, 2, 5, 46, 356, 3, 1]));


function revaa(str){
  let revi = ""
  for(let i = str.length-1 ; i>=0;i--){
    revi += str[i]

  }
if(revi === str){
console.log("Pilimndron");

  }else{
    console.log("noo");
    
  }

  return revi
}
console.log(revaa("malylam"));



// factorial

function op(num){
  let baap = 1  
  for(let a = 1 ;a<= num;a++){
    baap *= a
  }
  return baap
}

console.log("Factorial of Given Number :",op(5));

function add_num(number){
  let count = 0 
  for(let b = 0 ;b<=number; b++){
    count+=b
  }
  return count
}
console.log("Sum of Given Number :",add_num(5));


// Vowel and Consonents

function vov(val){
  let vcount= 0 
  let Vowels= "aeiouAEIOU"
  let Ccount  = 0 
  if(val === Vowels){
    vcount++

  }else if(val !== Vowels ){
  Ccount++
  }
  
  return{"Vowels":vcount,"Constonents":Ccount}

}
console.log(vov("Ayush"));


// sum of odd num Array 

function sum_odd(valu){
  let sumi = 0 
  for(let i = 1; i<=valu; i++){
    if (i%2 ==0) {
      sumi +=i
    }
  }
  return sumi
}
console.log(sum_odd(5));


// 

function po(o){
  let x = 0 
  while(o>0 ){
let p = o%10
x = x*10+p
o = Math.floor(o/10)


  }
  return x 

}
console.log(po(345));



// 





// 


let a =10 

let b =24


console.log(a,b);


function dupli(d){
  let  count = 0
  let = new set()
  if (d) {
    
  } else {
    
  }
}