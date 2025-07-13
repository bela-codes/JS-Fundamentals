const num_1 = Number(process.argv[2]);
const num_2 = Number(process.argv[3]);


function add(a, b){
    console.log(a + b);
}

// arrow version of this function
// const add = (a, b) => {
//     console.log(a + b);
// }

add(num_1, num_2);