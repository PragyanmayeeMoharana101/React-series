import { useState } from "react";


function AddList(){
    const[list,setList] = useState("");
    const [todos, setTodos] = useState([])
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos,list]);
        //setTodos(todo) not work as we are copying todo string to an array
        //setTodos([todo]) not work as we are always copying todo string to 0th index if array
        setList("")
    }
    return(
    
    <>
        <form onSubmit={handleSubmit}>
            <input onChange={(e) =>setList(e.target.value)} type="text" value={list}/> 
            <button type="submit">ADD</button>
         </form>
         {todos.map((item)=>{
        return <h3>{item}</h3>
        
    })}
    
    </> 
    
    )
}
export default AddList;