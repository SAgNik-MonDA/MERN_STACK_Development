let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("Button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");



    item.appendChild(delbtn);
    ul.appendChild(item);
     inp.value="";

});


// event delegation
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let ListItem=event.target.parentElement;
        ListItem.remove();
    };
});