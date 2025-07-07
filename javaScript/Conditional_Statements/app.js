// if statement

let firstname = "sagnik";
if(firstname == "sagnik"){
    console.log(`welcome ${firstname}`);
}

// else if statement 

let age =14;
if(age>=18){
    console.log("you can vote");
}
else if(age < 18) {
    console.log("you can not vote");
}

 // else statement

let limit =14;
if(limit>=18){
    console.log("you can vote");
}
else {
    console.log("you can not vote");
}

// nested if else

let marks = 32;
if (marks >=33){
    console.log("pass");

    if(marks >= 80){
        console.log("Grade : O");
    }
    else{
        console.log("Grade : A")
    }

}
else{
    console.log("Better luck next time !");

}


// Switch Statement

let color = "red";
switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default :
        console.log("Broken Light");
}
