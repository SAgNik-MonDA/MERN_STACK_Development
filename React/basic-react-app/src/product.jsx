import "./product.css";
import Price from "./price.jsx";
// function product({title ,price=1}){
//     return (
//         <div className="product">
//             <h3>{title}</h3>
//             <h5>price : {price}</h5>

//         </div>
//     );
// } 



// function product({title ,price,features}){
//     let isdis=price>30000;
//     let style={backgroundColor : isdis ? "yellow" : ""};
//     // const list=features.map((feature) => <li>{feature}</li>);
//     return (
//         <div className="product" style={style}>
//             <h3>{title}</h3>
//             <h5>price : {price}</h5>
//             {isdis ?<p> Discount of 5%</p>: null}
//         </div>
//     );
// }


function product({title,idx}){
    let oldPrices = ["12,495", "11,900","1,599","599"];
    let newPrices = ["8,999","9,199" , "899" ,"278"];
    let description = [["8,0000 DPI","designed for ipad pro"] , ["intuitive surface","Wireless"] , ["designed for ipad pro","8,0000 DPI"],["Wireless","intuitive surface"]]
    return (
        <div className="product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default product;