export default function Todoitem({item,todos, setTodos, setCount,count}){
    function handleDelete(){
        setTodos(todos.filter((temp)=>{
            setCount(count-1)
            return temp != item
            
        }))
    }
   return (
    <>
         <h3>{item} <button onClick={handleDelete}>X</button></h3>
    </>
   )

}