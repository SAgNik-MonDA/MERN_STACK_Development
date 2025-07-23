// onclick

// select single button
// let btn=document.querySelector("button");
// console.dir(btn);

// btn.onclick=function(){
//     alert("button was clicked");
// };

// another process

// function sayhellow(){
//     alert("hellow !");
// };
// btn.onclick=sayhellow;


// multiple button select
// let btn=document.querySelectorAll("button");
// for(btns of btn){
//     btns.onclick=sayhellow;
// };


// onmouse enter

// let butt=document.querySelectorAll("button");

// function hellow(){
//     alert("hiii");
// };
// for(btns of butt){
//     btns.onmouseenter=hellow;
// };


// EVENT listener

// let btn=document.querySelectorAll("button");
// for(btns of btn){
//     btns.addEventListener("click",sayhellow);
//     btns.addEventListener("click",name);
// };
// function sayhellow(){
//     alert("hellow");
// };
// function name(){
//     alert("sagnik");
// };



// Event listener for elements

// let p=document.querySelector("p");
// p.addEventListener("click",click);
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",mouseenter);




// function click(){
//     alert("para was clicked");
// };
// function mouseenter(){
//     alert("mouse inside the box");
// };



// This in event listener

// let btns=document.querySelector(".btn");
// btns.addEventListener("click",function(){
//     // alert(this.innerText);
//     this.style.backgroundColor="blue";
// });


// Keyboard Events
//  let inp=document.querySelector("input");

//  inp.addEventListener("keydown",function(){
//     alert("key was pressed");
//  });

// inp.addEventListener("keyup",function(event){
//     console.log(event);

//     alert("key was relased");
//  });


// Form Events

// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form submitted");

     //  Extracting form data 

// let inp=document.querySelector("input");
// alert(inp.value);
// });


// more events
// change event

// let user=document.querySelector(".user");
// user.addEventListener("change",function(){
//    console.log("change event");
//    console.log("value change & final value is : " ,this.value);
// });


// input event

// user.addEventListener("input",function(){
//     console.log("input event");
//    console.log("value change & final value is : " ,this.value);
// });



// project

let inp=document.querySelector("input");
let p=document.querySelector("p");
inp.addEventListener("input",function(){
    console.log(inp.value);
   p.innerText=inp.value;
})