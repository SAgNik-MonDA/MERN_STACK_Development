let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let fact=await getFacts();
    // console.log(fact);
    let p=document.querySelector("#result");
    p.innerText =fact;
    
})



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

// async function getFacts(){
//     let res=await fetch (url);
//     let data =await res.json();
//     console.log(data.fact);
// };
// getFacts();




// Axios

// async function getFacts(){
//    try{
//     let res=await axios.get(url);
//     return res.data.fact;
//    }
//    catch(e){
//     console.log("error",e);
//     return "NO FACT FOUND"
//    }
// };
