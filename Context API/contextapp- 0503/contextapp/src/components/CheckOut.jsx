import { useContext } from "react"
import { userContext } from "../App"

export default function CheckOut(){
    const {user , password, reEnter}= useContext(userContext);
    return(
        <div>
            <h2>checkout: {user}</h2>
            <h2>password: {password}</h2>
            
        </div>
    ) 
}