import { createContext, useState } from "react"
import CheckOut from "./components/CheckOut";
import Login from "./Login";
import SignUp from "./SignUp";
export const userContext = createContext();
function App() {
  const [user, setUser]= useState("");
  const [password, setPassword] = useState("")
  
  return (
    <>
      <userContext.Provider value={{user, setUser, password, setPassword }}>
        <Login/>
        <SignUp/>
        <CheckOut/>
      </userContext.Provider>
    </>
  )
}

export default App
