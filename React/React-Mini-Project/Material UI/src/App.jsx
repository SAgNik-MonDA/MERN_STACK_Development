import { useState } from 'react'
// import './App.css'

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
let handleClick = ()=>{
  console.log("Button Was clicked !!!");
};

  return (
    <>
      <h1>Material UT Demo</h1>
      <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon />}> Delete </Button>
    
          {/* <Button variant="contained"   onClick={handleClick} color="error" size="small"> click me2 </Button> */}
    </>
  );
}

export default App
