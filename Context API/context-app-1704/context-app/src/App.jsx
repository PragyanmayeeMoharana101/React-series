import { createContext, useState } from "react"
import CheckOut from "./components/CheckOut"

export const userContext = createContext();
function App() {
  const [user, setUser] = useState(["guest",1234])
  
  return (
    <>
    <userContext.Provider value={[user]}>
      <CheckOut/>
    </userContext.Provider>
    </>
  )
}

export default App
