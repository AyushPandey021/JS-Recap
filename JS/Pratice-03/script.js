// js pratice 3rd vid

// array based Question🎯

// Remove Duplicates in Array ✅
let a = [3,2,6,3,45,7,85,6,5,64]
let remove = [... new Set(a)]
// console.log(remove);
//  find the second largest Number in array ✅
let arr = [3,2,6,3,45,7,85,6,5,6]
// unique find using =>  Set()
let uni= [...new Set(arr)]
let sort = uni.sort(function(a,b){
    return  b-a 
})
console.log("second Largest : ",sort[1]);

// Revese the array without using .reverse
let p = [1,2,4]
let arr2= []
for(let i = p.length-1; i>=0;i--){
    arr2.push(p[i])
}
console.log(arr2);

// array reverse '
let q= [4,3,5,3,5,46,57,456,34,72457]
let k = []
for(let o = q.length-1; o>=0;o--){
    k.push(q[o])
}
console.log([k]);

// find the most Frequent Number 🎯
let freq = [1,5,3,6,8,5,7,4,5,2,4,6,3,5,9]