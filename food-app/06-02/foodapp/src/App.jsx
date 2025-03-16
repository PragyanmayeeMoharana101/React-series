//import Food from "./components/Food"
import { useState } from "react"
import FoodList from "./components/FoodList"
import Search from "./components/Search"

function App() {
  const [foodData , setFoodData] = useState([])

  return (
    <>
      <Search setFoodData={setFoodData}/>
      <FoodList foodData={foodData}/>
    </>
  )
}

export default App
