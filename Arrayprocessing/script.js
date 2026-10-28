const ary =["Apple",2.5,99,"Himachal","a"];

console.log("With for Each");


ary.forEach((element)=>{
    if(typeof element === "number"){
    console.log(element);
    }
});

var x = ary.map((element)=>{
    if(typeof element === "number"){
    console.log(element);
    }
});

console.log("X = ", x);

const ar2 = ["Apple",2.5, 99,"Himachal","a"];
var F = ar2.function((item) => item !== 99);

    
console.log("Fi = ",Fi);

const ar3
