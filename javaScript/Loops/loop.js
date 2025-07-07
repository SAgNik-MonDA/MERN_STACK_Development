// Basic (forward)
// for(let i=1;i<=5;i++){
//     console.log(i);
// }


// Backward
// for(let i=10;i>=5;i--){
//     console.log(i);
// }


// odd numbers
// for(let i=1;i<=15;i+=2){
// console.log(i);
// }


// even numbers
// for(let i=2;i<=10;i+=2){
//     console.log(i);
// }


// Infinite loop
// for(let i=1;i=>0;i++){
// console.log(i);
// }


//  Multiplication table of 5
// for(let i=5;i<=50;i+=5){
// console.log(i);
// }

// user input
// let n=prompt("enter a number");
// n=parseInt(n);
// for(let i=n;i<=n*10;i+=n){
// console.log(i);
// }

// Nested loop
// for(let i=1;i<=3;i++){
//     console.log("outer loop",i);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }


// while loop

// let i=5;
// while(i=>1){
//     console.log(i);
//     i--;
// }


// Break keyword
//  let i=1;
// while(i<=1){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i--;
// }


// Loops with Arrays

// let name=["sym","ram","jam"];
// for(let i=0;i<name.length;i++){
//     console.log(i,name[i]);
// }

// Nested loop with nested array

// let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
// for(let i=0;i<heroes.length;i++){
//     console.log(`List #${i+1}`);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }


// For of loop

// let fruits=["mango","banana","orange","litchi"];
// for(fruit of fruits){
//     console.log(fruit);
// }



// Nested for of loop

let heroes = [["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
for(list of heroes){
    // console.log(list)
    for(name of list){
        console.log(name);
    }
}
