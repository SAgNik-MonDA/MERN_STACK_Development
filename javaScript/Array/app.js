let students = ["sagnik","mondal","hit"]
console.log(students)
console.log(students[0][0])


//array are mutable
let fruits = ["apple","litchi","mango"];
fruits[0]="banana";
console.log(fruits)
fruits[10]="papaya";
console.log(fruits);


// array method

// push method
let fruit= ["apple","litchi","mango"];
console.log(fruit.push("graphs"));
console.log(fruit);

// pop method
fruit.pop();
console.log(fruit);

// unshift method
fruit.unshift("orange");
console.log(fruit);

// shift method
fruit.shift();
console.log(fruit);

// includes method
console.log(fruit.includes("z"));

//concat method
let a=["red","green","blue"];
let b=["yellow","white","green","black"];
console.log(a.concat(b));
console.log(b.concat(a));

// reverse
console.log(a.reverse());

// slice method
console.log(b.slice(0,1));
console.log(b.slice(9));
console.log(b.slice(-2));

// splice method
// console.log(b.splice(0,2));
// console.log(b);
console.log(b.splice(1,0,"red"));
console.log(b);

// sort method
let d=['b','d','e','a'];
d.sort();
console.log(d);

// Array reference
let arr1=[1];
let arr=[1];
console.log (arr1==arr);

// nested array
let e=[[1,2],[3,4],[5,6]];
console.log(e);