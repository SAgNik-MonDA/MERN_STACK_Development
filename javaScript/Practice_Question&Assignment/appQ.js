// practice Qs :---- create a traffic light system that shows what to do based on color.

 let color = "red" ;
if(color == "red"){
    console.log("stop");
}
if(color == "yellow"){
    console.log("slow Down");
}

if(color == "green"){
    console.log("go");
}



// practice Qs :----- create a system to calculate popcron prices based on the size customer asked for :

let size = "S" ;
if(size== "Xl"){
    console.log("price is Rs. 250");
}

else if(size== "L"){
    console.log("price is Rs. 200");
}

else if(size== "M"){
    console.log("price is Rs. 100");
}

else{
    console.log("price is Rs. 50");
}



// practice question :---- A "good string" is a string that starts with the letter 'a' & has a length >3. write a program to find if a string is good or not.

let str="sagnik";
if ((str[0]==='a') && (str.length >3))
{
    console.log("good String");
}
else{
    console.log("not a good string");
}


// Practice question :-------Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.

let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
            break;
            case 3:
            console.log("wed day");
            break;
            case 4:
            console.log("Thu day");
            break;
            case 5:
            console.log("Fri day");
            break;
            case 6:
            console.log("Sat day");
            break;
            case 7:
            console.log("Sun day");
            break;
            default:
          console.log("Wrong day !!!");
            break;
}

// JS (Part 2) Practice Questions
// JS (Part 2) Practice Questions Qs 1 Create a number variable num with some value .Now , print “good” if the number is divisible by 10 and print “bad” if it is not .

let num =20;
if(num % 10 == 0){
    console.log("good");
}
else{
    console.log("bad");
}

// Qs 2 . Take the user's name &age as input using prompts.Then return back the following statement to the user as an alert ( by substituting their name & age ) : name is age years old.[Use template Literals to print this sentence]

let name=prompt("Enter your name");
let age=prompt("Enter your age");
alert(`${name} is ${age} years old. `);

// Qs3
// Write a switch statement to print the months in a quarter. 
// Months in Quarter 1 : January , February , March 
// Months in Quarter 2 : April , May , June 
// Months in Quarter 3 : July , August , September 
// Months in Quarter 4 : October , November , December
// [Usethenumberasthecasevalueinswitch]

let quarter = 3;
switch(quarter){
    case 1:
        console.log("January , February , March");
        break;
        case 2:
            console.log("April , May , June");
            break;
            case 3:
            console.log("July , August , September");
            break;
            case 4:
            console.log("October , November , December");
            break;
            default:
          console.log("Wrong Quarater !!!");
            break;
}


// Qs4.A string is a golden string if it starts with  the character ‘A’ or ‘a’ and has a total length greater than 5.For a given string print if it is golden or not . 

let string="sagnik";
if ((str[0]==='a'||str[0]==='A') && (str.length >5))
{
    console.log("golden String");
}
else{
    console.log("not a golden string");
}

// Qs 5. Write a program to find the largest of 3 numbers .

let a=5;
let b=18;
let c=13;

if(a>b){
    if(a>c){
        console.log(a,"is largest");
    }
    else{
        console.log(c,"is largest");
    }
}
else {
    if(b>c){
        console.log(b,"is largest");
    }
    else{
        console.log(c,"is largest");
    }
}

// Qs 6.Write a program to check if 2 numbers have the same last digit.Eg:32 and 47852 have the same last digit i.e.2

let e=32;
let f=47852;
if((e % 10) == (f % 10)){
    console.log("Numbers have the same last digit which is",e % 10);
}
else{
    console.log("Numbers don't have the same last digit");
}

// practice Qs :----> For the given start state state of the array , change it to final from using methods.
let start = ["january","july","march","august"];
start.shift();
start.shift();
start.unshift("june");
start.unshift("july");


// p Qs 
let month=["january","july","march","august"];
month.splice(0,1);
month.splice(1,0,"june");


// p Qs tic-tac-toe game
let game =[['X',null,'O'] , [null,'X',null] , ['O',null,'X']];


// Js Practic Question (Part 3)
// Qs 1. Qs1.Write a JavaScript program to get the first n elements of an array.[n can be any positive number].For example :for array[7,9,0,-2]and n=3 Print,[7,9,0]

let arr =[7,9,0,-2];
let n=3;
let arr1 = arr.slice(0,n);
console.log(arr1);

// Qs 2. Write a JavaScript program to get the last n elements of an array.[n can be any positive number].For example:for array[7,9,0,-2]and n=3 Print,[9,0,-2]

let ar=[8,9,0,-2];
let m=3;
let arr4=console.log(ar.slice(ar.length-m));

// Qs 3 .Write a JavaScript program to check whether a string is blank or not.

let title="sagnik";
if(title.length==0){
    console.log("String is empty");
}
else{
    console.log("string is not empty");
}

// Qs 4. Write a JavaScript program to test whether the character at the given (character)index is lower case.

let E="sagnik";
let idx=2;
if(E[idx]==E[idx].toLowerCase()){
    console.log("character is lower case");
}
else{
    console.log("character is not lower case");
}

// Qs 5. Write a JavaScript program to strip leading and trailing spaces from a string .

let F = prompt("plz enter a string");
console.log(`original string = ${F}`);
console.log(`string without spaces = ${F.trim()}`);


// Qs 6.Write a JavaScript program to check if an element exists in an array or not .
let D=["hellow",'a',7,8,9,5];
let item=8;
if(arr.indexOf(item)!=-1){
    console.log("element exists in array");
}
else{
    console.log("element doesnot exists in array");
}