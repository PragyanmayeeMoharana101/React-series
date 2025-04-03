import Todoitem from "./Todoitem"


export default function TodoMap({todos}){
    return(
        <>
        {
        todos.map((item)=>{
            return <Todoitem key={item} item={item}/>
        })
    }
        </>
    )
}