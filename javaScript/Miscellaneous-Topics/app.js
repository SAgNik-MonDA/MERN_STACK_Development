// Arrow Function
const sum=(a,b)=>{
    console.log(a+b);
};
sum(2,3)

const cube=(n)=>{
    return n*n*n;
}
let c=cube(2);
console.log(c);

// Arrow Function Implicit return
const mul=(a,b)=>(
    a*b
);
let d=mul(2,3);
console.log(d)


// Set timeout

// console.log("Hi there!");
// setTimeout(()=>{
//     console.log("sagnik");
// },4000);
// console.log("welcome to");

// Set Interval

// console.log("hiii!!!!");
// let id=setInterval(()=>{
//     console.log("hellow");
// },2000);


// console.log("hiii!!!!");
// let id2=setInterval(()=>{
//     console.log("hellow2");
// },3000);

// clearInterval(id);  // use stop the function call


// Ex----> Write a function that prints "hellow world" 5 times at intervals of 2s each. 
let id3=setInterval(()=>{
    console.log("hellow world5");
},2000);

setTimeout(()=>{
    clearInterval(id3);
},10000);