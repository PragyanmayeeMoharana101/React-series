import { useState } from "react";
import TodoItem from "./TodoItem";

function AddList (){
    const [todo, setTodo]= useState("")
    const [todos, setTodos] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,todo])
        setTodo("")
    }
    return (
        <>
           <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo} />
                <button type="submit">ADD</button>
            </form>
           {todos.map((item)=>{
               return <TodoItem key={item} item = {item}/>
            })}
           
        </>
    )
}
export default AddList