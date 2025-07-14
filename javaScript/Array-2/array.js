// array method 
// for Each
 
// let arr=[1,2,3,4,5];
// let print=function(el){
//     console.log(el);
// };
// arr.forEach(print);

// another process

// arr.forEach(function(el)
// {
//     console.log(el);
// });

// using arrow function

// arr.forEach((el)=>
// {
//     console.log(el);
// });

// using objects
// let arr=[
//     {
//         name:"sagnik",
//         marks:95
//     },
//     {
//         name:"biplab",
//         marks:90
//     },
//     {
//         name:"rajat",
//         marks:80
//     }
// ]
// arr.forEach((student)=>{
//     console.log(student.marks);
// });



// map

// let num=[1,2,3,4];
// let double=num.map((el)=>{
//     return el*2;
// });

// console.log(double);

// another process

//  let arr=[
//     {
//         name:"sagnik",
//         marks:95
//     },
//     {
//         name:"biplab",
//         marks:90
//     },
//     {
//         name:"rajat",
//         marks:80
//     }
// ]

// let mark=arr.map((el)=>{
//     return el.marks/10;
// });
// console.log(mark)


// filter

// let arr=[5,8,6,2,3,9,7,4,11,10,21];
// let even=arr.filter((el)=>{
//     return el%2==0;
// });
// console.log(even);

// Every
let arr=[2,4,6];
let even=arr.every((el)=> (
    el%2 == 0
));
console.log(even);