const arg = process.argv[2];
let size = Number(arg);



if(Number.isNaN(size)){
    console.log("Missing size");
}else{
    size = parseInt(size);
    for(let i = 1; i <= size; i++){
        console.log("X".repeat(size));
    }
}
