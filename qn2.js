const read = require('readline-sync')

const fs = require('fs')

let flightfare = read.question('Flight fare: ');

let finalflightfare=parseInt(flightfare);

let bt=read.question('Booking time (24 hr format) : ');

if(bt>=6 && bt<9){

    finalflightfare=finalflightfare+((finalflightfare*10)/100)

console.log("Final amount(10%) = "+finalflightfare)

}

if(bt>=9 && bt<17){

    finalflightfare=finalflightfare+((finalflightfare*20)/100)

console.log("Final amount(20%) = "+finalflightfare)

}

if(bt>=17 && bt<23){

    finalflightfare=finalflightfare+((finalflightfare*7)/100)

console.log("Final amount(7%) = "+finalflightfare)

}

if(bt>=23 && bt<6){

    finalflightfare=finalflightfare+((finalflightfare*5)/100)

console.log("Final amount(5%) = "+finalflightfare)

}