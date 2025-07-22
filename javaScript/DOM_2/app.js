let btn=document.querySelector("button");
console.dir(btn);


// btn.onclick=function(){
//     alert("button was clicked");
// };


// another process

function sayhellow(){
    alert("hellow !");
};
btn.onclick=sayhellow;