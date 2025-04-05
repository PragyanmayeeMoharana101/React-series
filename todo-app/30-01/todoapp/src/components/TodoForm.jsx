import { useState } from "react";

export default function TodoForm({todos, setTodos}){
    let[todo,setTodo]= useState("");
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo("");
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
            <button type="submit">ADD</button>
        </form>
        </>
    )
}