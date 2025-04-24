import { useContext, useState } from "react"
import { userContext } from "./App"

export default function SignUp(){
    
    const {user , setUser, password, setPassword} = useContext(userContext);
    const [data, setData] = useState(user);
    const [text , setText] = useState(password);
    const [text2, setText2] = useState(password)
    function handleSubmit(){
        
       
        if(text == text2){
            setPassword(text);
            setUser(data);
        }else{
            setPassword("password does not match");
            setUser("RE-TYPE CORRECT USER NAME AND PASSWORD")
        }
    }
    return(
        <div>
            <h1>SignUp</h1>
            username:
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
            <br/>
            password:
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} /><br/>
            re-enter password: 
            <input type="text" value={text2} onChange={(e)=>setText2(e.target.value)} /><br/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}