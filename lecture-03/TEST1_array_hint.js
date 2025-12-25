// const furniture = ['Table', 'Chairs', 'Couch'];


// for (int i = 0; i < names.length; i++) {
//     FileSystem.out.println(word[i]);
// }//that's not correct yet



//answer teacher**
const furniture = ['Table', 'Chairs', 'Couch'];

for (let item of furniture){
    for (let char of item) {
        console.log(char);
    }
}