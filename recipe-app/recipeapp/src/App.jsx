import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import Container from "./components/Container"
import ItemContainer from "./components/ItemContainer"
import Ingredients from "./components/Ingredients"
import Instructions from "./components/Instructions"
import Nav from "./components/Nav"


function App() {
  const [foodData,setFoodData] = useState ([])
  const[ingrediants, setIngrediants] = useState([])
  const [instructions, setInstructions]= useState([])
  return (
    <>
      <Nav/>
      <Search setFoodData={setFoodData}/>
      <Container>
       <ItemContainer>
          <FoodList setIngrediants={setIngrediants} setInstructions={setInstructions} foodData={foodData}/>
      </ItemContainer>
      <ItemContainer>
          <Ingredients ingrediants={ingrediants}/>
      </ItemContainer>
      <ItemContainer>
          <Instructions instructions={instructions}/>
      </ItemContainer>
      </Container>
      
      
    </>
  )
}

export default App
