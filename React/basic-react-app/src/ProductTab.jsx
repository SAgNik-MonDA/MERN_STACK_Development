import Product from "./product.jsx";
function ProductTab() {

  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent:"center",
    alignItems:"center"
  };
  
  let features = [ <li>"hi-tech"</li> ,<li>"durable"</li> , <li>"fast"</li> ];
// let options = ["hi-tech","durable","fast"];
  return (
    <div style={styles}>
      {/* <Product title="phone"  price={30000} features={features}/>
      <Product title="laptop" price={40000}/>
      <Product title="pen" price={10}/> 
      
      */}

      <Product title="Logitech MX Master" idx={0}/>
      <Product title="Apple Pencil (2nd Gen)" idx={1}/>
      <Product title="Zebronics Zeb-transformer" idx={2}/>
      <Product title="petronics Toad 23" idx={3}/>


  </div>
    );

}

export default ProductTab;