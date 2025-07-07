let todo=[];

let work = prompt("please enter your requst");

while(true){
    if(work === "quit"){
        console.log("quiting app");
        break;
    }
    if(work == "list"){
        console.log("--------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i+1,todo[i]);
        }
        console.log("--------------------");
    }

    else if(work == "add"){
        let task =prompt("please enter the task you want to add");
        todo.push(task);
       console.log("task added");
    }

    else if(work == "delete"){
        let idx =prompt("please enter the task index you want to remove");
        
        todo.splice(idx , 1);
        console.log("task deleted");
    } 
     work=prompt("please enter your requst");
}