var pass=[]
var input = require('readline-sync')
for(let i=0;i<2;i++){
    var dob=input.question("Enter the DateOf Birth: ")
    pass.push(dob)
}
console.log(pass)