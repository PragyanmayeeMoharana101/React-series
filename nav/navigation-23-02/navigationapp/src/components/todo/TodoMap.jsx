import Todoitem from "./Todoitem"


export default function TodoMap({todos, setTodos, count, setCount}){
    
    
    return(
        <>
        
        {
        todos.map((item)=>{
            return<Todoitem key={item} item={item} todos= {todos}  setTodos= {setTodos} count={count} setCount={setCount}/>
            
        })
        
        }
        
        <p>total number of items: {count}</p> 
        </>
    )
}