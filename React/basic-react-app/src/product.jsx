import "./product.css";
// function product({title ,price=1}){
//     return (
//         <div className="product">
//             <h3>{title}</h3>
//             <h5>price : {price}</h5>

//         </div>
//     );
// } 



function product({title ,price,features}){
    let isdis=price>30000;
    let style={backgroundColor : isdis ? "yellow" : ""};
    // const list=features.map((feature) => <li>{feature}</li>);
    return (
        <div className="product" style={style}>
            <h3>{title}</h3>
            <h5>price : {price}</h5>
            {isdis ?<p> Discount of 5%</p>: null}
        </div>
    );
}

export default product;