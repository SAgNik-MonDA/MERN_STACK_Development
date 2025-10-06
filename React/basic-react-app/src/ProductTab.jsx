import Product from "./product.jsx";
function ProductTab() {
  
  let features = [ <li>"hi-tech"</li> ,<li>"durable"</li> , <li>"fast"</li> ];
// let options = ["hi-tech","durable","fast"];
  return (
    <>
      <Product title="phone"  price={30000} features={features}/>
      <Product title="laptop" price={40000}/>
      <Product title="pen" price={10}/>
  </>
    );

}

export default ProductTab;