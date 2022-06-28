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
//         return evenNumber(a+1,b)
//     }
//     else if(a<=b) {
//        return evenNumber(a+1,b)
// }
    
// }
// evenNumber(1,20)

// Question_4
// find the factorial of the given number

 
// function factorial(num) {
  
//     if(num>0){
        
//         return num*factorial(num-1)
//     }else{
//         return 1;
//     }
    
// }
//  console.log(factorial(10));  

// // Question_5
// find the nth digit of fibonacci series

// function fibonacci(num1,num2,count=0){
//     if(count<=8){
//         let c=num1+num2
//         return fibonacci(num2,c,count+1)
//     }
//     console.log(num2);
// }
// fibonacci(20,30)

// Question_6
// print sum of all the numbers in the given range
// function sumOfNumber(a,b,sum=0){
//     if(a<=b){
//         sum=sum+a
//         return sumOfNumber(a+1,b,sum)


//     }
//   console.log(sum)  
// }
// sumOfNumber(1,20)

//Question_7
// print the product of all the numbers in given range

// function productOfNumber(a,b,product=1) {
//     if(a<=b){
//         product=product*a
//         return productOfNumber(a+1,b,product)
//     }
//     console.log(product)
// }
// productOfNumber(1,10)

// Question_8
// write the recurisive function to check whether a given number is prime or not
// 

// function primeNumber(num,i) {
//       if
// }
// primeNumber(15,2)


// function product(a,b){
//     let  product=1
//      let flag=false
//     for(i=a; i<=b; i++){
//            let number=Math.floor(i/10)
//            let lastSecond=number%10
         
//            if(lastSecond==4 && i%2==0){
//              flag=true
//              product=product*i
             
             
//            } 
//    } 
     
//    if(flag){
//      return(product)
//    }else{
//      return 0;
//    }
      
   
     
//    }
//    console.log(product(20,30))


// // question-9
// //sum of first 10 even number

// function sumOfEvenNumber(num,sum,i) {
     
//      if(num%2==0 && i<=10){
//          sum=sum+num
//          return sumOfEvenNumber(num+2,sum,i+1)

//      }
//      console.log(sum)
// }
// sumOfEvenNumber(2,0,1)


// //Question-10
// // find the power of given number and exponent
//  function Power&Exponent(params) {
     
//  }






// / print all odd number from 1 to n
// let num= 10;
// for(let i = 1 ; i <= num; i++){
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }
// find odd numbers in betn a range
// a , b
// function oddNumber(num1,num2) {
//     if(num1<=num2 && num1%2 !== 0){
//         console.log(num1);
//         return oddNumber(num1+1,num2);
//     }
//     else if(num1<=num2){
//         return oddNumber(num1+1,num2);
//     }
// }
// oddNumber(11,20);
// find 2^n using recursion  use the same for calculation 2^n + a , where a = can be any value
// 2^5 = 2*2*2*2*2 = 32
// function powerOf2(num){
//     if(num>0){
//         return 2*powerOf2(num-1)
//     }else{
//         return 1;
//     }
// }
// // ret = 2*2*2*2*2*1
// let ret = powerOf2(5);
// console.log(ret);
// Find factorial of a number
// 5! = 5*4*3*2*1
// function factorial(num){
//     if(num>0){
//         return num*factorial(num-1)
//     }else{
//         return 1;
//     }
// }
// ret = 5*4*3*2*1*1
// let ret = factorial(5);
// console.log(ret);
// Check if a given is prime number or not?
// divisible by self and 1
// 5/1,5/2 = not a prime
// let num = 6;
// for(let i = 2; i < num ; i++){
//     if(num%i == 0){
//         console.log("Not a Prime number");
//         break;
//     }
// }
function checkIfPrime(num,temp=2){
    if(temp<num ){
        if(num%temp == 0){
            return "Not a Prime number";
        }else{
            return checkIfPrime(num,temp+1);
        }
    }else {
        return "Prime Number";
    }
}
let ret = checkIfPrime(31);
console.log(ret);
// React
// Reply








