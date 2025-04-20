import { useContext } from "react"
import { UserContext } from "./App"

export default function (){
   const {user} =  useContext(UserContext);
    return(
        <div>
            <h2>checkout as {user}</h2>
        </div>
    )
}