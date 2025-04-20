import { useContext, useState} from "react";
import { UserContext } from "./App";


export default function (){
    const {user , setUser} =  useContext(UserContext);
    const [data, setData] = useState(user);
    return(
        <div>
            
                <input type="text" onChange={(e)=>setData(e.target.value)}  value={data}/>
                <button style={{width:"60px", height:"18px"}} onClick={()=>setUser(data)}></button>
                
                
            
        </div>
        
    )
}