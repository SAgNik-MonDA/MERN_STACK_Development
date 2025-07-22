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

let butt=document.querySelectorAll("button");

function hellow(){
    alert("hiii");
};
for(btns of butt){
    btns.onmouseenter=hellow;
};