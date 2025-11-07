// object oriented Programming
// blueprint of object 
function Bisket(name ,price , qty, color,blog){
this.name = name,
this.price = price,
this.qty= qty,
this.color= color
this.blog  = function(){
    let h1 = document.querySelector("h1")
    h1.textContent = "Mera Bhai Ayush , Usko Baat nI Krni h.."
    h1.style.color = color
}

 

}
let c = new Bisket("Orio",40, 8 , "brown ",)
// let d = new Bisket("Patanjali ",30, 12 , "Black  ")
// let e = new Bisket("Haldiram's",20, 5 , "Orange ",)

console.log(c);

// console.log(d);
// console.log(e);
// console.log(Bisket.blog());

