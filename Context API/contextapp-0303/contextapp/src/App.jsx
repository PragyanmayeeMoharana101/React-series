import { createContext, useContext } from "react"
import { useState } from "react"
import CheckOut from "./Checkout"
export const UserContext = createContext();

function App() {
  const [user, setUser]= useState("guest")
  
  useContext
  return (
    <>
    <UserContext.Provider value={user}>
      <CheckOut/>
    </UserContext.Provider>
      
    </>
  )
}

export default App
