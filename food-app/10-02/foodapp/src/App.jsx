import Food from "./components/Food"
import "./App.css"
import Nav from "./components/Nav"
import Container from "./components/Container"

function App() {
  

  return (
    <>
      <Nav/>
      
      <Container>
        <Food/>
        <h1>hello</h1>
      </Container>
    </>
  )
}

export default App
