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
//  use QuerySelectorAll  to select all button with class buy-now",
let buynow = document.querySelectorAll(".buy-now")
console.log(buynow);
//🎯 T1: Select the Heading Of a Page  By Id And Change its text to "Welcome To Sheriyansh"
h2.textContent= "Welcome To Sheriyansh"

// T2 🎯 select all <li> elements and print their text using a loop.
let li = document.querySelectorAll("li")
li.forEach(function(n){
    console.log(n.textContent);
})

// ➡️ What is the Diffrence between innertext , textContent and innerHTMl ? 
h2.innerHtml = "<i>hello guys whatsapp ? </i>"

// h1.textContent = "hello guys whatsapp ?"

// T3 select a paragaraph and replace its content with 
{/* <b>Updates </b> by JavaScript  */}
let p = document.querySelector("p")
p.innerHTML = "<b>Updates </b> by JavaScript Replaced✅"
// ➡️ select how do  you get the src of an image using Javascript ? 
// getAttribute , setAttribute , removeAttribute  usecases

let dog = document.querySelector(".dog")
console.log(dog.getAttribute("src"));
// select the anchor tag and change its href to "https://www.google.com"
let link = document.querySelector("a")
console.log(link.setAttribute("href", "https://portfolio1-77.vercel.app/")
);
//  ➡️ Add a title attribute to a div dynamically 
let div = document.querySelector("div")
console.log(div.setAttribute("title","View More"));

// ➡️Remove the Disabled attribute from a button
 let btn = document.querySelector("button")
//  btn.removeAttribute("disabled")

// Advanced Question ✅ 
// Dynamic Dom Manupulation
//➡️ What does createElement() do? What's returned ?
// create one black node with no values
let h1 = document.createElement("h1")
console.log(h1);


// ➡️whats the diffrence between append and prepend ?
// append add the value in bottom of the selected element 
// prepend add the value in top of the selected element

// ➡️can you remove an element using removeChild() ?
document.querySelector("ul").removeChild(document.querySelector("li"))
// ➡️how do you change the style of an element using JavaScript ? 
// using style property we can change the css property dynamically
// ➡️create a new list item <li> new task </li> and add it to an existing ul with the id task-list
let ul = document.querySelector("ul")
let li1 = document.createElement("li")
li1.textContent = "new task"
ul.appendChild(li1)



// time is 3:20