//import Food from "./components/Food"
import { useState } from "react"
import FoodList from "./components/FoodList"
import Search from "./components/Search"
import Nav from "./components/Nav"

function App() {
  const [foodData , setFoodData] = useState([])

  return (
    <>
      <Nav/>
      <Search setFoodData={setFoodData}/>
      <FoodList foodData={foodData}/>
    </>
  )
}

export default App
