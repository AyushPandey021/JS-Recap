class usr{
constructor(fullname, place , number){
    this.fullname =fullname,
    this.place= place,
    this.number = number
}

say(){
    console.log(`Your Fullname is : ${this.fullname} and you are from ${this.place} if i contact you so your contact number ${this.number}`);
    


}


}
let user= new usr("Manas Rajan", "Odisha", 9744874158)
user.say()