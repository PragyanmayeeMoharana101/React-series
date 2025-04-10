import { useState } from "react"

function App() {
  let [count , setCount] = useState(0);

  function increaseCount (){
    // count = count +1;
    if(count>=10){
      setCount(0)
    }else{
      setCount(count+1);
    }
    
    
  }

  function decreaseCount(){
    // count = count -1;
    if(count<=-10){
      setCount(0)
    }else{
      setCount(count-1)
    } 
  }

  function reset(){
    count = 0;
    setCount(count)
  }

  return (
    <>
     {
      (count>=10?<h1 style = {{color:"red", fontSize:"40px", backgroundColor: "yellow", width:"100px", textAlign:"center"}}>{count}</h1>:<h1 style = {{color:"black", fontSize:"40px", backgroundColor: "yellow", width:"100px", textAlign:"center"}}>{count}</h1>)
     }
      
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
