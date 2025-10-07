import "./App.css";
// import Title from "./Title.jsx";

// named import

import {Title} from "./Title.jsx";
// import MsgBox from "./MsgBox.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";
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



// function App() {
  

//   return (
//     <>        <h2>Blockbuster Deals | Shop now</h2>

//       {/* <MsgBox userName="sagnik" textColor="yellow" /> */}
//       <ProductTab/>
//   </>
//     );

// }



function App() {
  

  return (
    <>       
    <Button />

    <Form />
  </>
    );

}


export default App
