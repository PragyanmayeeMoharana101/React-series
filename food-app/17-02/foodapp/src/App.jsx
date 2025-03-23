import { useState } from "react"
import Nav from "./components/Nav"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import Container from "./components/Container"
import ItemContainer from "./components/ItemContainer"
import FoodDetails from "./components/FoodDetails"


function App() {
  const [foodData, setFoodData]= useState([])
  const[foodId,setFoodId] = useState("658615");
  return (
    <>
      <Nav/>
      <Search setFoodData={setFoodData} />
      <Container>
        <ItemContainer>
        <FoodList foodData={foodData} setFoodId={setFoodId}/>
        </ItemContainer>
        <ItemContainer>
          <FoodDetails foodId={foodId} />
        </ItemContainer>
      
      
      </Container>

      
    </>
  )
}

export default App
