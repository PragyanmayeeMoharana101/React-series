import { createContext, useContext } from "react"
import { useState } from "react"
import CheckOut from "./CheckOut"
import Login from "./Login";
export const UserContext = createContext();

function App() {
  const [user, setUser]= useState("guest")
  
  useContext
  return (
    <>
    
    <UserContext.Provider value={{user, setUser}} >
      <Login/>
      <CheckOut/>
    </UserContext.Provider>
      
    </>
  )
}

export default App