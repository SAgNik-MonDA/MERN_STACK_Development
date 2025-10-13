import { useState } from 'react'
import './App.css'
import Form from './Form'
import CommentsForm from './CommentsForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form /> */}


      <CommentsForm />
    </>
  )
}

export default App
