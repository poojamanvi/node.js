// Question-1

// Square star pattern in javascrip

// let n= 5

// for(i=1;i<=n;i++){
//     let stars=' '
//    for(j=1;j<=n;j++){
//        stars+=' * '

//    }
//    console.log(stars)
// }

// Question -2

// Hollow squre pattern

// let n=5
// for(i=1;i<=n;i++){
//         let stars='  '
//        for(j=1;j<=n;j++){
//        if(i==1||j==1||i==5||j==5){
//             stars+=' * '
//            }else{
//                stars+='   '
//            }
           
    
//        }
//        console.log(stars)
//     }


// Question-3

// Right triangle pattern in javascript

// let n= 5

// for(i=1;i<=n;i++){
//     let stars=' '
//    for(j=1;j<=n-i;j++){
//        stars+='   '
//  } 
//    for(k=1;k<=i;k++){
//        stars+=' * '
//    }
//    console.log(stars)
// }

// Question-4

// Left triangle pattern in javascript

// let n= 5

// for(i=1;i<=n;i++){
//     let stars=' '
//    for(j=1;j<=i;j++){
//        stars+=' * '
//  } 
   
//    console.log(stars)
// }


// Question-5
// 
// Downward triangle star pattern
// let n= 5

// for(i=0;i<n;i++){
//     let stars=' '
//    for(j=0;j<n-i;j++){
//        stars+='  *  '
//  } 
//    console.log(stars)
// }


// Question-6

// hollow triangle star pattern
let n= 6

for(i=1;i<=n;i++){
    let stars=' '
   for(j=1;j<=i;j++){
       if(i===n){
        stars+=' * '
       }else{
           if(j==1||j==i){
            stars+=' * '
           }else{
            stars+='   ' 
           }
       }
       
 } 
   
   console.log(stars)
}







