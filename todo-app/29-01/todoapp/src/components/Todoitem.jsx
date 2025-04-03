export default function Todoitem({item}){
    function handleClick(){
        console.log("hello",item)
    }
   return <h3>{item} <button onClick={handleClick}>X</button></h3>

}