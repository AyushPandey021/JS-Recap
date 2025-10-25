let h1 = document.querySelector("h1")
window.addEventListener("keydown",function(dets){
    if(dets.key == " "){
        h1.textContent= "SPC"
    }else if (dets.key == "Backspace"){
        h1.textContent= "🔙"
    }else{
        h1.textContent= dets.key
    }
})