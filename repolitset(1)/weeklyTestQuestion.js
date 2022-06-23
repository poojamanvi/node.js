// Replit Weekly test Question set 1

// Question-1

// Accept the number of days from the user and calculate the charge for library according to following :
// Till five days : Rs 0/day.
// Six to ten days : Rs 3/day.
// 11 to 15 days : Rs 4/day
// After 15 days : Rs 5/day
// constraints:
// 0<=day<=365
// input:
// Already given as function parameter
// Output:
// Total charge
// Eg:
// input:
// 10
// Output:
// 15
// let TotalCharge=(days)=>{
 
//  let Totalcharge
 
// if(days<=5){
//     console.log(Totalcharge=days*0);
// }else if(days>=6 && days<=10){
//     console.log(Totalcharge=5*0+(days-5)*3);
// }else if(days>=11 && days<=15){
//     console.log(Totalcharge=5*0+5*3+(days-10)*4);
// }else if( days>15){
//     console.log(Totalcharge=5*0+5*3+5*4+(days-15)*5);
// }else{
//     console.log("not valid");

//     return(Totalcharge)
// }
// }

// console.log(TotalCharge(30))





// Question-2


// Abhishek choudhary is the teacher of a higher secondary school. He was assigned a task to record the number of students in each class. The 1st class has ‘A ’ students and 2nd class has ‘B’ students. He completed noting down all the classes but till he reached class xth the school was over. When he was going through the list he noticed that the next class had students equal to the sum of its last two classes. Can you help him to find out the number of students present in xth class using the above details.
// constraint:
// 1<=A,B<=100
// Input:
// Input are provided as functions parameters.
// Output:
// Numbers of students (integer)
// eg:
// a = 20 b = 30
// output:
// 890



// Soluation

// function students(a,b){
 
//     for(let i=1;i<=8;i++){
//          c=a+b
//           a=b
//           b=c
      
//     } 
//     return(c) 
//    }
//    console.log(students(20,30))
   
//    exports.students = students 


// Question-3

// Take a time in 24 hour fomrat and onvert it to 12 hour format. Also if hour or minute is of single digit add "0" before it
// Input:
// hour and min will be provided as two different parameters in function
// output:
// time in 12 hour format with AM and PM written
// eg:
// hour = 13 min = 56
// output:
// 1:56 PM
// Note: there is a space between 1:56 and PM
// eg: 2
// hour = 7 min = 25
// output:
// 07:25 AM
// Note: "0" has been added before 7 as it was single digit





// Question-5

// Use Switch case:
// No if else is allowed.
// Take 3 numbers and find and return biggest of them. If all three numbers are same than print "None of them is biggest"
// if there are two numbers same as biggest than also print "None of them is biggest"
// Eg:
// 10
// 30
// 20
// Output:

// 30
// Eg:

// 11
// 22
// 22

// "None of them is biggest"

// soluation
// function biggest(a,b,c){
//     switch(a>b && a>c){
//       case true:
//         return a;
//         break;
//     }
//     switch(b>a && b>c){
//       case true:
//       return b;
//     }
//   switch(c>a && c>b){
//       case true:
//       return c;
//     }
//    switch(a==b||b==c||c==a){
//       case true:
//       return ("None of them is biggest");
//     }
//     switch(a==b==c){
//       case true:
//       return ("None of them is biggest");
//     }
    
        
//   }
//   console.log(biggest(121,13,13))


// Question-6