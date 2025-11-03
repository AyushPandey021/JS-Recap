let pro = new Promise((res,rej)=>{
   let pizza = false 
   if(pizza){
    res("yes i get the Pizza")
   }else{
    res("pizza has been not deleverd ")
   }
})
pro.then((data)=>{
   console.log(data);
   
    
}).catch((error)=>{

    console.log(error);
    
})




// fetch -> useing to fectch to the data from the website 
// fetch  add in url link and return in  then and catch true to than false to catch if the runs the code, not show directly you convert ro data in json format 
// raw.json()
fetch("url")
.then((raw)=>{
    return  raw.json()
    
}).catch(()=>{
    console.log("its not works");
    
})
// fetch returns a promies data in from of than and catch  