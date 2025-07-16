// selecting elemnts by id

let obj=document.getElementById("description");
console.dir(obj);

// selecting elemnts by class name

let img=document.getElementsByClassName("oldImg");
for(let i=0;i<img.length;i++){
    console.dir(img[i]);
}