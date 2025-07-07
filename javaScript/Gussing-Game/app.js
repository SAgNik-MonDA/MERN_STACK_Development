const max  = prompt("please enter a random number");
const random = Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");
while(true){
    if(guess=="quit" || max =="quit"){
        alert("user quit");
        break;
    }
    if(guess==random){
        alert("Congrats !!! you are right !");
        break;
    }
    else if(guess < random){
        guess=prompt("Hint: Your guess was too small. Please try again !");
    }
    else{
        guess=prompt("Your guess was too large. Please try again !");
    }
}