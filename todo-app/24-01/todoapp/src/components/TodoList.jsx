import TodoItem from "./TodoItem";
export default function Todolist ({todos}){
    return (
        <>
            {todos.map((item)=>{
               return <TodoItem key={item} item = {item}/>
            })}
        </>
    )
}