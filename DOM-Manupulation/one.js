// What is DOM Manipulation?
// => DOM Manipulation means accessing and changing elements of the DOM using JavaScript.
// Add or remove HTML elements
// Change text or attributes
// Change CSS styles dynamically
// Respond to user actions (click, hover, etc.)

//  let ap = document.querySelector('h1')
 let ancor = document.querySelector("a")
 let src = document.querySelector("img")
//  for single :querySelector 
//  for all elemnt :querySelectorall 
// ap.innerHTML = "Tu Kesa h  ?"

// ap.hidden= true
// ➡️ atribute is called inside in achor and image tag like src , alt etc.

//  console.log(ap);

// Atribute Manupulation
//  ancor.setAttribute("href", )
// ➡️ setAttribute  use for update scr, href helpt to update urls 

console.log(ancor.getAttribute("href"));
console.log(src.getAttribute("alt"));
// ➡️getAttribute for get the value inside the values like  src href alt  in ancor tag

 console.log(  src.removeAttribute("src") );
//  Remove Attribute for removeing Values src 


// ⏭️ Dynamic Dom Manupulation
let h2 = document.createElement("h2")
let h3 = document.createElement("h3")
h2.textContent= "hello guys whatsapp ?"

//➡️ its dynamic Dom part create Element for select but not show add value help of textContent and append for value add in bottom and  prepend for show text in top 
document.querySelector("body").prepend(h3)
document.querySelector("body").append(h2)
console.log(h2);
console.log(h3);




