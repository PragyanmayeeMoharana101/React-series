import { useContext, useState } from "react"
import { userContext } from "./App"

export default function Login(){
    
    const {user , setUser, password, setPassword} = useContext(userContext);
    const [data, setData] = useState(user);
    const [text , setText] = useState(password);
    
    function handleSubmit(){
        setUser(data);
        setPassword(text);
    }
    return(
        <div>
            <h1>Login</h1>
            username:
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
            <br/>
            password:
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} /><br/>
           
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}