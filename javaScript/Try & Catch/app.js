// this key word

const student={
    name: "sagnik",
    age:23,
    eng:89,
    math:50,
    getAvg(){
        let avg=(this.eng+this.math)/2
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};
console.log(student.getAvg());

// try & catch

console.log("hellow");
console.log("hellow");
try{
    console.log(a);
}
catch(error){
    console.log("variable a doesnot");
    console.log(error)
}
console.log("hellow2");
console.log("hellow2");