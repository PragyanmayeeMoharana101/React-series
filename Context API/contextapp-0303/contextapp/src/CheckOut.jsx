import { useContext } from "react"
import { UserContext } from "./App"


export default function CheckOut(){
   const user = useContext(UserContext)
   
    return(
        <div>
         <h1>checkout as {user}</h1>
            

        </div>
    )
}