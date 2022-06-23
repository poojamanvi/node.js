// function x(num,facto){
//     if(num>0){
//         facto = facto*num;
//         return x((num-1),facto);
//     }
//     return facto;

// }
// console.log(x(5,1))


// function x(num1,num2,counter){
    
//     if(counter<10){
        
//         let c= num1+num2  
          
//         return x(num2,c,counter+1)
//     }
//     console.log(num1);
       

// }
// x(1,1,1)


// Question-1
// print all number between the given range

// function range(a,b){
//   if(a<=b){
//     console.log(a)
//     return range(a+1,b)
//   }
// }
// range(10,20)

// question-2
// print factorial of a number using recurrison

// function factorial(num,facto){
//     if(num>0){
//       facto=facto*num
//       return factorial(num-1,facto)
//     }
//     console.log(facto)
// }
// factorial(5,1)

// Question-3
// print number in descendind order

// function descendind(a,b){
//   if(a>=b){
//      console.log(a)
//      return descendind(a-1,b)
//   }
// }
// descendind(30,20)


// Question-4
// fibonacci series

// function fibonacci(a,b,counter) {
//      if(counter<10){
//        let c= a+b
       
//        return fibonacci(b,c,counter+1)
//      }
//      console.log(a)
// }
// fibonacci(1,1,1)

//  Question-6
//  count the number of digit

// function numberOfDigit(num,count) {
//   if(num>0){
//     count=count+1
//      num = Math.floor(num/10)
//     return numberOfDigit(num,count)
//   }
//   console.log(count);
  
  
// }
// numberOfDigit(12546,0)


// 
// print all odd number from 1 to n

// function oddNumber(num,count){
//     if(num<=20 && num%2!=0){
//       console.log(num);
//       return oddNumber(num+2,count+1)
        
//     }
// }oddNumber(1,1)


// Question-10
// print all even number from n to 1
//
// function evenNumber(n,count) {

//   if(n>=1 && n%2==0){
//     console.log(n)
//     return evenNumber(n-2,count+1)
// }
// }
// evenNumber(20,1) 


// Question No-12
// given a number n,find 2^n using recursion

// function Power(num) {
//      let x=  num**2
//        console.log(x)
// }
// Power(5)


// Question No-11
// find the number is a palindromic

function palindromic(num,reverse) {
   if(num>0){
       let reminder=num%10
       num=Math.floor(num/10)
       reverse=reverse*10+reminder
       return palindromic(num,reverse)

   }
    if (num=reverse){
      console.log("Number is palindromic");
    }else{
      console.log("Number is not a palindromic");
    }
}
palindromic(12321,0)
