// Async JS 
// jab bhi js me aap code likhoge js me wo do prakar ka code ho sakta hai. syncohronus and asyncohronus  => apka code dono me se ek ka hi hoga.


//   Sync & aysn  
// ➡️JS  me apka code mein sabse  pehle sync part ko run krta h, sync code ko js main stack(thread) pe  chalati h, kyuki js single threaded  synchronous lenguage h , after sync code run hone ke baad async code ko  lakar run kiya jata h. 
// ➡️(async code pehle collback queue me move hota than event loop check krta h main stack empty h ya ni, agr h to event loop usse main stack me move krega. moveing process is called event loop )


//➡️ topic 
// main Thread -> js only runs main stack code, main stack code always runs only.
// collstack ->
// WebAPI -> browers give you many things to perfrom work , its a features of broweser to helping in development , is called window object also. 
// like -> console.log(), setInterval(), setTimeout ,alert() => all are not a part of js its given by browser.

// callback queue ->
// microtask queue ->
// macrotask queue ->