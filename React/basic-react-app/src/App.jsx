import "./App.css";
// import Title from "./Title.jsx";

// named import

import {Title} from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";

function Des(){
  return <h1>I am the description</h1>;
}





// function App() {
  

//   return (
//     <div>
//       <h1>This is my app component</h1>
//       <p>inside app component we have :</p>

//       <Des />
//   <Title / >

// <Des/>
//   </div>
//     );

// }


// react fragment

// function App() {
  

//   return (
//     <>
//       <h1>This is my app component</h1>
//       <p>inside app component we have :</p>

//       <Des />
//   <Title />
// <Des/>
//   </>
//     );

// }



function App() {
  

  return (
    <>
      <ProductTab/>
  </>
    );

}


export default App
