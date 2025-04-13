import { useState } from "react"
import Search from "./Search"
import FoodList from "./FoodList"
import Nav from "./Nav"
import Container from "./Container"
import ItemContainer from "./ItemContainer"
import FoodDetails from "./FoodDetails"


function FoodApp() {
  const[foodData, setFoodData]=useState([]);
  const [foodId, setFoodId]= useState("658615");
  return (
    <>
    <Nav/>
      <Search setFoodData= {setFoodData}/>
      <Container>
        <ItemContainer>
        <FoodList foodData={foodData} setFoodId={setFoodId}/>
        </ItemContainer>
        <ItemContainer>
          <FoodDetails foodId={foodId}/>
        </ItemContainer>
      </Container>
      
    </>
  )
}

export default FoodApp
