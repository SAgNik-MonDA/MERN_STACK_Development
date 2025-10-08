import {useState} from "react";
export default function TodoList(){
    let[todos,setTodos] = useState(["sample task"]);

    let[newTodo , setNewTodo] = useState("");

    let addNewTask = () =>{
      setTodos([...todos,newTodo]);
      setNewTodo("");
    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    }


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
                         <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    );
}