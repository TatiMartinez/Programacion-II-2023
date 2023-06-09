const valores= [2, 5, 6, 8];

//for (let i=0; i< valores.length; i++){
//    console.log(valores[i]);
//}

//for (let val of valores){
//    console.log(val);
//}

for(let i in valores){
    console.info(i + " . " + valores[i]);
}

let i