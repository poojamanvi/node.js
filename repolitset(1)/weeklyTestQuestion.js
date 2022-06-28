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



// function amPm(hr,min){
//     if(hr==0){
//      min= min<10 ? "0"+ min :min;
//       // hr>10 ? '0'+hr : hr
//      return(12+":"+min+" "+'AM')
//     }
//      else if(hr>=12){
//       hr=hr-12
//       min=min<10 ?"0"+min:min
//       hr= hr<10 ?"0"+hr:hr
//        if(hr==0){
//          return(12+":"+min+" "+'PM')
//        }else{
//       return(hr+":"+min+" "+'PM')
//     }
//      }
//     else{
//          min = min<10 ?"0"+min:min
//          hr =  hr<10 ?"0"+hr:hr
//           return(hr+":"+min+" "+'AM')
    
//   }
    
//   }
//   console.log(amPm(11,2))
//   exports.amPm = amPm













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
//    exports.product = product


// Question-7
// Take a number and find the "ans" by sum of sqaure of digits. once you find this "ans" repeat the steps ( I mean find sum of square of digits of ans) and repeat this process until you get 1.

// Eg: 49 => 44 + 99 =>16+81 => 97
// since 97 is not equal to 1 so we will repeat the steps
// 97 => 99+77 = 81+49 = 130
// it is still not 1: so lets repeat
// 130 => 11 + 33 + 0 => 10 it is still not 1: so lets repeat
// 10 => 1*1 +0 = 1

// If after certain number of steps finally we get 1 than number is called "CodeSpecial"

// in case if it is not possible to get 1 after any number of steps than lets call that number "SomethingUnusual"





// function checkNumber(n){
//     let counter=1
//   while(counter<100 && n!=1){
//      let sum = 0
//       while(n!=0){
//          let reminder = n%10
//          sum=sum+reminder**2
//           n = Math.floor(n/10)
      
//       }
//     counter++
//     n=sum
    
     
      
//   }
//     if(n==1){
//     return("CodeSpecial")
//     }else{
//     return("SomethingUnusual")
//    }
    
//   }


// 

// Write a code to take time in seconds and convert it into hour, mins and seonds

// Input:
// already given as function parameter

// Output:
// hour, mins and seconds with a message as in example.

// Eg:

// input:
// 5000

// Output:
// In 5000 seconds 1 hours , 23 minutes and 20 seconds are possible


// function time(seconds){
//     let hour=Math.floor(seconds/3600)
//     let mint=Math.floor((seconds-hour*3600)/60)
//     let sec=(seconds%60)
   
//      hour<=12
   
//    return(`In ${seconds} seconds ${hour} hours , ${mint} minutes and ${sec} seconds are possible`)
    
       
     
//      // return ?
//    }
//    console.log(time(5000))
//    exports.time = time
