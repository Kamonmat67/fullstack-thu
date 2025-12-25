const names = ["Justin", "Sarah", "Chistopher"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}//1 



names.forEach(name => {
    console.log(name);
});//2 


names.forEach(myFunction);
function myFunction(name){
    console.log(name);
}//3



//no in slide
for (let name of names){
    console.log(name);
}//4 Bonus