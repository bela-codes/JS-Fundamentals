const input = process.argv[2];
const num = Number(input);


if(Number.isNaN(num)){
    console.log("Not a number");
}else{
    console.log("My number: " + parseInt(num));
}