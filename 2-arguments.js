const count = process.argv.length - 2;

if(count === 0){
    console.log("No argument");
}else if(count === 1){
    console.log("Argument found");
}else{
    console.log("Arguments found");
}





// const { argv } = require('node:process');

// // print process.argv
// // argv.forEach((val, index) => {
// //   console.log(`${index}: ${val}`);
// // });

// if (argv.length === 2){
//     console.log("No argument");
// }else if(argv.length === 3){
//     console.log("Argument found");
// }else{
//     console.log("Arguments found");
// }

// // for(let i = 2; i < argv.length(); i++){
// //     if (argv.length)
// // }
// console.log(process.argv)
