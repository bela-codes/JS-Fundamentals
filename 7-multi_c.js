const occurrences = process.argv[2];
const times = Number(occurrences);

if(Number.isNaN(times)){
    console.log("Missing number of occurrences");
}else{
    for(let i = 1; i <= times; i++){
        console.log("C is fun");
    }
}