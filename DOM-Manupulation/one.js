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
h3.style.color = "red"
h3.style.backgroundColor = "green"
h3.textContent = "I am h3 tag"
console.log(h2);
console.log(h3);



// Pratice Questions ✅
// ➡️ What is the DOM? how  does it represent thr HTML structure?
// => this is Document Object Model and its represent HTML structure in tree format and all element are Node and its help to access and manupulate the HTML element using JavaScript
//➡️ Diffrence between innerHTML, textContent, and innerText?
// => innerHTML use for get and set the HTML content of an element and it can include HTML tags.
// => textContent use for get and set the text content of an element and it will return all text including hidden elements.
// => innerText use for get and set the visible text content of an element and it will not return hidden text.
// ➡️what is the diffrence between getElementById and QuerySelector?
// => getElementById use for select the element by its ID and it will return a single element.
// => QuerySelector use for select the element using any CSS selector (ID, class, tag, etc.) and it will return the first matching element.
// ➡️what does getelementbyclassname  return? is it an array?
// => it return a HTMLCollection of all elements with the specified class name and its not an array but it can be converted into an array using Array.from() or spread operator [...]