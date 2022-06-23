// // Question-1
// // Using a loop print all natural numbers up to and including n....

// // for loop
// var i =parseInt(process.argv[2]);
// for( let i=1; i<= 10;  i++){
//     console.log(i);
// }
// // while loop
// var i =parseInt(process.argv[2]);
// var i=1;
// while( i<= 10){
// console.log(i);
// i++
// }
// // Question-2
// //Using a loop print all even numbers up to and including n....

// // for loop

// var i =parseInt(process.argv[3])

// for( let i=1; i<= 20;  i++){
//     if(i%2==0)
//     console.log(i);
// }

// // while loop

// var i =parseInt(process.argv[2]);
// var i=1;
// while( i<= 20){
//     if(i%2==0)
// console.log(i);
// i++
// }


// // Question-3
// // print all number their a to b in reverse order

// // for loop
// var i =parseInt(process.argv[2])
// for( let i=20; i>= 1;  i--){
//     console.log(i);
// } 

// // while loop
// var i =parseInt(process.argv[2]);
// var i=20;
// while( i>= 1){
    
// console.log(i);
// i--
// }

// // Question-4

// // find the factorial of a number

// // for loop
// var i =parseInt(process.argv[2])
// var num = 5
// for(i=num-1;i>=1;i--){
//     num*=i
    
// }
// console.log(num)


// // while loop
// var i =parseInt(process.argv[3])

// num = 5
// i=num-1
// while(i>0){
//     num*=i
//     i--
// }
// console.log(num)

// question-5
// write a program to print of all the digit of a number

// While loop

// let num = 1234567

// while(num>0){
//   let reminder = (num%10)
//    console.log(reminder)
//     num = Math.floor(num/10)

// }

// for loop
// let num = 1234567

// for(i=num; i>0; i=i){
//     console.log(i%10)
//     i=Math.floor(i/10)
// }
// 

// Question no - 6
// Write a program to print the fibonacci series
// 

// for loop
// let a=20
// let b=30
// let sum=0
// for(i=1;i<=10;i++){
     
//     let c=a+b;
//        a=b;
//        b=c;
// }
// console.log()

// while loop

// let a= 20
// let b= 30

// let i = 1
// while(i<=10){
    
    
//      let c = a+b
//         a=b
//         b=c
//         i++
// }
// console.log(a)











// // for loop
// let a=1
// let b=2

// for(i=1;i<=10;i++){
//     console.log(a)
//     let c=a+b
//      a=b
//      b=c
// }


function a(){
    console.log("hello, world")
}
setTimeout(a,2000)

