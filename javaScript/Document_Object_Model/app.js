// selecting elemnts by id

// let obj=document.getElementById("description");
// console.dir(obj);

// selecting elemnts by class name

// let img=document.getElementsByClassName("oldImg");
// for(let i=0;i<img.length;i++){
//     console.dir(img[i]);
// }

// // selecting elemnts by tag name

// let tag=document.getElementsByTagName("p");
// console.dir(tag);

// Query selectors

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));



// select multiple tag

// console.dir(document.querySelectorAll("div a"));



// using properties & method

// let para=document.querySelector("p");
// console.dir(para.innerText);
// console.dir(para.textContent);
// console.dir(para.innerHTML);



// Manipulating Attributes

let img=document.querySelector("img");
img.getAttribute("id");
img.setAttribute("id","spider");
