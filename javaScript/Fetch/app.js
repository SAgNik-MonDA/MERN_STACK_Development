let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res);
//     res.json().then((data)=>{
//         console.log(data);
//     });
// })
// .catch((err)=>{
//     console.log(err);
// });



// using async & await

async function getFacts(){
    let res=await fetch (url);
    let data =await res.json();
    console.log(data.fact);
};
getFacts();
