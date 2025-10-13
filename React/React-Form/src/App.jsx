import { useState } from 'react'
import './App.css'
import Form from './Form'
import CommentsForm from './CommentsForm'
import Comment from './Comment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form /> */}

      <Comment />
      {/* <CommentsForm /> */}

      
    </>
  )
}

export default App
