"use strict";

//exercise 2
function showMultiplicationTable(input){
for(var x = 1; x <= 10; x++){
    console.log(x + " x " + input + " = " + (x * input));

}}
showMultiplicationTable(9);



//exercise 3
for(var x = 1; x <=10; x++){
    var randomNum = Math.floor(Math.random() * 181) + 20;
    if(randomNum % 2 === 0){
        console.log(randomNum + " is even");
    }else {
        console.log(randomNum + " is odd");
    }
}




//exercise 4

for(x = 1; x < 10; x++){
    console.log(x.toString().repeat(x));

}

//exercise 5
for(var x = 100; x >= 5 ; x = x - 5){
    console.log(x);
}



