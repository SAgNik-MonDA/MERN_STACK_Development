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

// function changecolor(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextcolorchange)nextcolorchange();
//     },delay);
// }

// changecolor("red",1000,()=>{
//     changecolor("orange",1000,()=>{
//         changecolor("green",1000);
//     });
// });



// using promise

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num=Math.floor(Math.random() *5)+1;
        if(num>3){
            reject("promise rejected");
        }
        h1.style.color=color;
        console.log(`color changed ${color}!`);
        resolve("color changed");
    },delay);
});
};

// changecolor("orange",1000)
// .then(()=>{
//     console.log("orange color was changed");
//     return changecolor("blue",1000)
// })
// .then(()=>{
//     console.log("blue color changed");
//     return changecolor("green",1000)
// })
// .then(()=>{
//     console.log("green color was changed");
// })
// .catch(()=>{
//     console.log("color was not changed");
// })


// using async & await

// async function demo(){
//     await changecolor("green",1000);
//     await changecolor("red",1000);
//     await changecolor("orange",1000);
//     await changecolor("yellow",1000);
//     await changecolor("pink",1000);
//     await changecolor("brown",1000);

// }


// handling rejection with await

async function demo(){
    try{
    await changecolor("green",1000);
    await changecolor("red",1000);
    await changecolor("orange",1000);
    await changecolor("yellow",1000);
    await changecolor("pink",1000);
    await changecolor("brown",1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a=3;
    console.log(a);
}