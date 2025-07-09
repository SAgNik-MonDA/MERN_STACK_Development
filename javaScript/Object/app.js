// object literals

let student={
    name: "sagnik",
    age: 20
};
console.log(student);

// Example
const post ={
    username: "@sagnik",
    content: "This is my first post",
    like: 5,
    repost: 10,
    tag: ["@sagnik","@trend"]
};
console.log(post)

// get values
console.log(post["username"]);
// another process
console.log(post.content);

// js automatically converts object keys to string
let obj={
    1:"A",
    2:"B",
    null:"d",
    true:"c",
    undefined:"e"
};
console.log(obj[null]);

// Add & update & delete

// update
let customer={
    name:"@Roni",
    age:20,
    city:"delhi"
};
console.log(customer);
customer.city="kolkata";
console.log(customer);

// add
customer.gender="male";
console.log(customer);

// delete
delete customer.age;
console.log(customer);

// Object of Object
const classInfo={
    sagnik:{
        grade:"A+",
        city:"kolkata"
    },
    soni:{
        grade:"B+",
        city:"delhi"
    },

};
console.log(classInfo);
console.log(classInfo.sagnik);
console.log(classInfo.sagnik.city);

// array of objects

const person=[
    {
        name:"jojo",
        city:"delhi"
    },

    {
        name:"sany",
        city:"sikim"
    }
];
console.log(person);
console.log(person[1]);
console.log(person[1].city);


// Math objects
console.log(Math.PI);
console.log(Math.pow(4,2));
// floor use for round of value nearset smallest integer value
console.log(Math.floor(-5.5));
// floor use for round of value nearset largest integer value
console.log(Math.ceil(5.5));
// give any random value from 0 to 1
console.log(Math.random());

