import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';





export default function TodoList(){
    let[todos,setTodos] = useState([{task:"sample-task",id:uuidv4()}]);

    let[newTodo , setNewTodo] = useState("");

    let addNewTask = () =>{
      setTodos((prevTodos) =>{
        return [...prevTodos,{task:newTodo,id:uuidv4()}]
      });
      setNewTodo("");
    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    };


    let deleteTodo = (id) =>{
       setTodos ((prevTodos) => prevTodos.filter((todo) => todo.id != id));
    };


    let upperCaseAll=()=>{
        setTodos((prevTodos)=> (
            prevTodos.map((todo)=>{
            return {
                ...todo,
                task:todo.task.toUpperCase(),
            };
      })
            
    ));

};


    return (
        <div>

            <h4>Todo List</h4>

            <input type="text"  placeholder="add atask" value={newTodo} onChange={updateTodoValue}/>
            <br />
            <button onClick={addNewTask}>Add a Task</button>
            <br /><br />
            <br /><br />
            <br /><br />

            <hr />
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo)=>(
                         <li key={todo.id}>
                          <span>  {todo.task} </span>
                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                          <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                            
                            </li>
                    ))
                }
            </ul>
                <br /><br />
            <button onClick={upperCaseAll}>Uppercase All</button>
        </div>
    );
}