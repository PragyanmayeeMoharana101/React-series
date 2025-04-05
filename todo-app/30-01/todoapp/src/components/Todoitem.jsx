export default function Todoitem({item,todos, setTodos}){
    function handleDelete(){
        setTodos(todos.filter((temp)=>{
            return temp != item
        }))
    }
   return <h3>{item} <button onClick={handleDelete}>X</button></h3>

}