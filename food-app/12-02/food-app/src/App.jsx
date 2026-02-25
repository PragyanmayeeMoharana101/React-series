import { useState } from "react"
// import Food from "./components/food"
import FoodList from "./components/FoodList"
import Search from "./components/Search"
import Nav from "./components/nav"
import Container from "./components/Container"
import FoodDetails from "./components/FoodDetails"
import ItemContainer from "./components/ItemContainer"

function App() {
  const [foodData,setFoodData]=useState([])

  return (
    <>
      {/* <Food /> */}
      <Nav />
      <Search setFoodData={setFoodData}/>
      <Container >
        <ItemContainer>
          <FoodList foodData={foodData} />
        </ItemContainer>
        <ItemContainer>
           <FoodDetails />
        </ItemContainer>
      
    
      </Container>
      
      
      
    
    </>
  )
}

export default App
