import Todoitem from "./Todoitem"


export default function TodoMap({todos, setTodos}){
    
    return(
        <>
        {
        todos.map((item)=>{
            return <Todoitem key={item} item={item} todos= {todos} setTodos= {setTodos}/>
            
        })
    }   
        </>
    )
}