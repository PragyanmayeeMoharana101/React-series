import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import Nav from "./Nav"
import TodoList from "./components/todo/Todo"
import FoodApp from "./components/food/FoodApp"
import CardsApp from "./components/cards/CardsApp"
import CounterApp from "./components/counter/Counter"
import Colorchanger from "./components/color changer/Colorchanger"
import RecipeApp from "./components/recipe/Recipeapp"
function App() {
 

  return (
    
    <>
   
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/todo" element={<TodoList/>}/>
        <Route path = "/food" element={<FoodApp/>}/>
        <Route path = "/card" element={<CardsApp/>}/>
        <Route path = "/counter" element={<CounterApp/>}/>
        <Route path = "/colorchanger" element={<Colorchanger/>}/>
        <Route path = "/recipe" element={<RecipeApp/>}/>
        <Route path = "*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
