const read = require('readline-sync')

const fs = require('fs')

let passenger = read.question('Enter passenger name: ');
console.log(passenger)
let totalmiles = read.question('Enter total miles travelled: ');
console.log(totalmiles)
var flyerpoint=10;
if(totalmiles>10000&&totalmiles<20000)
{
console.log("flyer point awarded is 10")
}
if(totalmiles>20000&&totalmiles<50000 )
{
    console.log(" flyer point awarded is 20")
}
if(totalmiles>50000&&totalmiles<100000)
{
    console.log(" flyer point awarded is 30")
}
if(totalmiles>100000)
{
    console.log(" flyer point awarded is 50")
}