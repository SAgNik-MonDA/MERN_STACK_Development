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

// let arr=[2,4,6];
// let even=arr.every((el)=> (
//     el%2 == 0
// ));
// console.log(even);


// Reduce

// let nums=[1,2,3,4];
// let final=nums.reduce((res,el)=>res+el);
// console.log(final);



// maxmimum in array using reduce method

// let arr=[1,4,8,6,10,45,49];
// let max=arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(max);



// Practice Qs ----

// check if all numbers in our array are multiples of 10 or not.
// let arr=[40,10,20,30];
// let ans=arr.every((el)=>el%10==0);
// console.log(ans);


//create a function to find the min number in an array
// let arr=[50,40,11,20,80];
// let ans =arr.reduce((min,el)=>{
//     if(min<el){
//         return min;
//     }
//     else{
//         return el;
//     }
// });
// console.log(ans);



// Default parameters 

// function sum(a,b=2){
//     return a+b;
// };
// console.log(sum(2));
// console.log(sum(2,5));


// Spread

// let arr=[5,8,2,9,4,2];
// console.log(Math.min(...arr));
// console.log(..."sagnik");



// Spread with array literals

// let arr=[1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);

// let odd=[1,3,5,7,9];
// let even =[2,4,6,8,10];
// let nums = [...odd, ...even];
// console.log(nums);



// Spread with object literals
