const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const g = 9.8;
const PI = 3.14;

// module export (1 file to another file transfer data)

module.exports=123;

let obj={
    sum: sum ,
    mul: mul,
    g:g ,
    PI: PI,
};
module.exports=obj;



