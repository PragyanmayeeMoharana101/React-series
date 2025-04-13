import { useState } from "react"
import Search from "./Search"
import FoodList from "./FoodList"
import Container from "./Container"
import ItemContainer from "./ItemContainer"
import Ingredients from "./Ingredients"
import Instructions from "./Instructions"
import Nav from "./Nav"


function RecipeApp() {
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

export default RecipeApp
