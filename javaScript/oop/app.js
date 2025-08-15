// factory function


// function personmaker(name,age){
//     const person ={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hii , my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// p1=personamker("sagnik",20);
// p1.talk();



//constructors ---- > doesn't return anything & start with capital letter .....


// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype.talk=function(){
//     console.log(`hiii... my name is ${this.name}`);
// }

// let p1 = new Person("sagnik",20);
// let p2 = new Person("deba",20); 


// p1.talk();
// p2.talk();



// class 

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     talk(){
//         console.log(`hiii... my name is ${this.name}`);
//     }

// }

// let p1 = new Person("sagnik",20);
// let p2 = new Person("deba",20); 


// p1.talk();
// p2.talk();


// Inheritance

class Person{
    constructor(name,age){
         this.name=name;
        this.age=age;
    }
     talk(){
        console.log(`hi.... I am ${this.name}`);
    }
}


class Student extends Person{
    constructor(name,age,marks){
        super(name,age);    // parent class constructor is being called
        this.marks=marks;
    }
}
let stu1=new Student("sagnik",25,95); 


class Teacher extends Person{
    constructor(name,age,subject){
          super(name,age);    // parent class constructor is being called
        this.subject=subject;
    }
}


let s1 = new Student("sagnik",20,85);
s1.talk();

let t1 = new Teacher ("Deba",50,"coding");
t1.talk();