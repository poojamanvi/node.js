// Assignment Question

// Question_1
// print all number in the given range

// function range(a,b){
//     if(a<=b){
//         console.log(a)
//         return range((a+1),b)
//     }
// }
// range(1,10)

// Question_2
// Print all the numbers in descending order in the given range 

// function descendingOrder(a,b){
//     if(b>=a)
//     console.log(b)
//     return descendingOrder(a,b-1)
// }
// descendingOrder(1,10)


// Question_3
// print all the even number in the given range

// function evenNumber(a,b){
//     if(a<=b && a%2==0){
//         console.log(a)
//         return evenNumber(a+2,b)
//     }
    
// }
// evenNumber(10,20)

// Question_4
// find the factorial of the given number

 
function factorial(num,facto) {
  
    if(num>0){
        facto=facto*num
        return factorial(num-1,facto)
    }
   console.log(facto) 
}
factorial(10,1)

// Question_5
// find the nth digit of fibonacci series

function fibonacci(num1,num2,count){
    if(count<=8){
        let c=num1+num2
        return fibonacci(num2,c,count+1)
    }
    console.log(num2);
}
fibonacci(20,30,1)