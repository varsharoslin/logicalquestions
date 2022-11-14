

var pass=[]
let constant = 5000;
var input = require('readline-sync')


for (let i = 0; i < 3; i++) {

    var number = input.question("Enter the weight: ")

    pass.push(number)

}
for(let i=0;i<pass.length;i++){
    if(pass[i]>23){
        constant+=((pass[i]-23)*15)
        console.log(constant)
    }

        let minValue = Math.min(constant);
        let maxValue = Math.max(constant);
        console.log(minValue);
        console.log(maxValue)





        constant=5000
}

// else{
//    console.log(constant)}
    








// let array = [28, 45, 69, 20, 15, 7, 98]; 
    //    let min = pass[0], max = pass[0]; 
    //    for (let i = 1; i < pass.length; i++) { 
    //       if (pass[i] > max) 
    //          max = pass[i]; 
    //       if (pass[i] < min) 
    //          min = pass[i]; 
    //     } 
    // minValue = Math.min(pass);
    //         maxValue = Math.max(pass);
    //         console.log(minValue);
    //         console.log(maxValue)

// for (let i = 0; i < pass.length; i++) {

//     for (let j = 0; j < pass.length-i-1; j++) {

//         if (pass[j]>pass[j+1]) {

//             temp = pass[j+1]

//             pass[j+1] = pass[j]

//             pass[j] = temp

// console.log(pass)

//         }

       

//     }

   

// }