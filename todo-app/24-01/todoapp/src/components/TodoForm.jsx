import { useState } from "react";
export default function TodoForm ({todos, setTodos}){
    const [todo, setTodo]= useState("")
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo("")
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo} />
                <button type="submit">ADD</button>
            </form>
        </>
    )
}