const btns=document.querySelectorAll("button");
for(let btn of btns){
    btn.addEventListener("click",() => {
        document.write("Button was cliked");
    });
};