// js call stack

function hello(){
    console.log("inside hellow function");
    console.log("hellow");
}
function demo(){
    console.log("calling hellow function");
    hello();
}
console.log("calling demo function");
demo();
console.log("done,by");


// single threaded
let a =10;
console.log(a);
let b=5;
console.log(b);
console.log(a+b);



// callback hell
h1=document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color="red";
// },1000);

// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);


// setTimeout(()=>{
//     h1.style.color="blue";
// },3000);

function changecolor(color,delay,nextcolorchange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextcolorchange)nextcolorchange();
    },delay);
}

changecolor("red",1000,()=>{
    changecolor("orange",1000,()=>{
        changecolor("green",1000);
    });
});