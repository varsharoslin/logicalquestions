const readline = require("readline-sync");

var num = 0;

var nums = [];

console.log("Input Fares:")

while(true){

    num = readline.question();

    if(num == "q"){

        break;

    }

    else{

        nums.push(num);

    }

}

console.log(nums);