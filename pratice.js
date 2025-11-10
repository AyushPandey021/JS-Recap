// reverse string without built-in funtion
let ap = (st)=>{

    let val = ""
    for(let i = st.length-1; i>=0;i--){
        val +=st[i]

    }
    return val 
}
console.log(ap("Kittu"));



// reverse the number
function nambar(kp){
    let ulta = 0 
    while( kp !== 0 ){
    let did  = kp % 10
    ulta = ulta *10 + did
    kp = Math.floor(kp/10)

    }
    return ulta
}
console.log(nambar(988));




// find second leargest number 

function findTwoLargest(arr){
    let frist = second  = -Infinity
    for(let num of arr ){
        if(num > frist){
            second = frist
            frist = second 
            frist = num 
        }else  if(num > second && num <frist){
            second = num 
        }
    }

    console.log(frist, second,frist);
    
}
findTwoLargest([10,20,30,40,50])


// pilindrome

function pil(str){
    let left = 0 
    let right = str.length-1 
    while(left<right){
        if(str[left] !== str[right]){
            return false
        }
        left++
        right--
    }
    return true
}

console.log(pil("mom"));







