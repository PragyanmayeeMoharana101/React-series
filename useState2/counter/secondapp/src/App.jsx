import { useState } from "react"
import './App.css'
function App() {
  
  let [count , setCount] = useState(0);

  function increaseCount (){
    count = count +1;
    setCount(count);
    
  }

  function decreaseCount(){
    if (count>0) {
      count = count -1;
      setCount(count)
    } else {
      setCount(0);
    }
    
  }

  function double (){
    count = count * 2;
    setCount(count)
  }
  function reset(){
    count = 0;
    setCount(count)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={double}>Double</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
