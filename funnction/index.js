sum(3,4);

function sum(a,b){
    let c = a + b;
    console.log(c);
}


function sum_with_d(x,y=10){
    console.log(x+y);

} 


function Calculate(a,b,c){
    return a+b-c;
}

let answer = Calculate(5,6,7);
console.log(answer);

const greet = function(){
    console.log ("welcome to javascript")
        
    };

    greet();