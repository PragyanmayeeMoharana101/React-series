import { useContext } from "react"
import { userContext } from "../App"
export default function CheckOut(){
    const [userName, pin] = useContext(userContext)
    return(
        <div>
        <h1>CheckOut as {userName}</h1>
        <h1>pin: {pin}</h1>
        </div>
    )
}