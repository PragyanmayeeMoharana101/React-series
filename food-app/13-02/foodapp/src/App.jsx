import { useState } from "react"
import Nav from "./components/Nav"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import Container from "./components/Container"
import FoodDetails from "./components/FoodDetails"
import ItemContainer from "./components/ItemContainer"


function App() {
  const [foodData, setFoodData]= useState([])
  return (
    <>
      <Nav/>
      <Search setFoodData={setFoodData}/>
      <Container>
        <ItemContainer>
        <FoodList foodData={foodData}/>
        </ItemContainer>
        <ItemContainer>
        <FoodDetails/>
        </ItemContainer>
      
      
      </Container>

      
    </>
  )
}

export default App
