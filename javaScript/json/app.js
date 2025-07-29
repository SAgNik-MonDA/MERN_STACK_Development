let jsonreq='{"fact":"Approximately 1\/3 of cat owners think their pets are able to read their minds.","length":78}';
console.log(jsonreq);


// convert into json to js object

let validres=JSON.parse(jsonreq);
console.log(validres);
console.log(validres.fact);


// convert into js object to json object


let student={
    name: "sahnik",
    marks: 80
};
let json=JSON.stringify(student);
console.log(json);