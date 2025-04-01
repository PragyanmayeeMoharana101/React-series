import { useState } from "react";

import TodoForm from "./TodoForm";
import Todolist from "./TodoList";

function AddList (){
    
    const [todos, setTodos] = useState([]);
    
    return (
        <>
           <TodoForm todos = {todos} setTodos= {setTodos}/>
           <Todolist todos = {todos}/>
           
        </>
    )
}
export default AddList