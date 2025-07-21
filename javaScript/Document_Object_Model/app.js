// selecting elemnts by id

let obj=document.getElementById("description");
console.dir(obj);

// selecting elemnts by class name

let img=document.getElementsByClassName("oldImg");
for(let i=0;i<img.length;i++){
    console.dir(img[i]);
}

// // selecting elemnts by tag name

let tag=document.getElementsByTagName("p");
console.dir(tag);

// Query selectors

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));



// select multiple tag

console.dir(document.querySelectorAll("div a"));



// using properties & method

let para=document.querySelector("p");
console.dir(para.innerText);
console.dir(para.textContent);
console.dir(para.innerHTML);



// Manipulating Attributes

let img=document.querySelector("img");
img.getAttribute("id");
img.setAttribute("id","spider");

// Manipulating Style

let heading=document.querySelector("h1");
console.log(heading.style);
heading.style.color="red";



//using class list

let img = document.querySelector("img");
 console.dir(img.classList);
img.classList.add("abc");
console.dir(img.classList);




// Navigation

let h4=document.querySelector("h4");
console.log(h4.parentElement);

let box=document.querySelector(".box");
console.log(box.children);
console.log(box.childElementCount);


// Adding element

let newp=document.createElement("p");
newp.innerText="hii i am a new p";
let body=document.querySelector("body");
body.appendChild(newp);

// newp.append(" this is new text");

body.prepend(" this is new text");


let btn=document.createElement("button");
btn.innerHTML="new btn !!!!!";
let p=document.querySelector("p");
p.insertAdjacentElement("beforebegin",btn)


// removing elements

let body1 = document.querySelector("body");
body1.remove(btn);
