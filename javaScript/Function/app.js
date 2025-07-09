// basic code
function hello(){
    console.log("hellow");
}
hello();

// Ex----
function isAdult(){
    let age=13;
    if(age>=18){
        console.log("adult");
    }
    else{
        console.log("not adult");
    }
}
isAdult();

//Ex---->
// create a function to roll a dice & always display the value of the dice (1 to 6)
function rollDice (){
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);
}
rollDice();


//Function With Arguments
function Printname(name){
    console.log(name);
}
Printname("sagnik");
Printname("mondal");

// Ex---
// function sum(a,b){
//     document.write(a+b);
// }
// sum(6,7);

// Ex---->>> Average of three numbers
function avg(a,b,c){
console.log((a+b+c)/3);
}
avg(5,6,5);

// Ex---> Multiplication table
function table(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}
table(3);


// Return Keyword
function sum(a,b){
    return a+b;
}
console.log(sum(sum(6,7),2));


// Ex----> create a function that returns the sum of numbers from 1 to n
function summ(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(summ(100));

//Create a function that returns the concatenation of all strings in an array
function con(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result +=str[i];
    }
    return result;
} 
let str=["sagnik","mondal"];
console.log(con(str));


// scope

let n=54; //Global scope
function calsum(a,b){
    let n=a+b; //Function scope
    console.log(n);
}
calsum(1,2);
console.log(n);


// Block scope
{
for(let i=0;i<=5;i++){
    console.log(i);
}
}
// console.log(i); //error occurs because i is block scope.

// Lexical scope
  function outer(){
    let x=9;
    let y=10;
    function inner(){
        console.log(x);
        console.log(y);
    }
    inner();
  }
  outer();

//   High order function
function multi(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet= function(){
    console.log("hellow!!");
}
multi(greet,4);

// High order function (returns a function)
function oddOrEven(request){
    if(request=="odd"){
        let odd=function (n){
        console.log(!(n%2==0));
}
    return odd;
    }
else if(request=="even"){
let even = function(n){
    console.log(n%2==0);
}
return even ;
}
else{
    console.log("Wrong request");
}
}
let request="odd";
let func=oddOrEven(request);
func(2);


// Methods
const cal={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    },
};
console.log (cal.add(3,5));