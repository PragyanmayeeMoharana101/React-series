import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoMap from "./TodoMap";

export default function TodoList(){
    
    let[todos,setTodos]= useState([]);
    
    return(
        <>
        <TodoForm todos={todos} setTodos={setTodos}/>
        <TodoMap todos= {todos} />
        </>
    )
}