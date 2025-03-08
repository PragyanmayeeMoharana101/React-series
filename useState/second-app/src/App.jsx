import { useState } from "react";

function App() {
  let [value , setValue] = useState("happy");
  function text(e){
    setValue(e.target.value)
  }
 
  return (
    <>
      <form>
        <input type="text" value={value} onChange={text}/>
      </form>
    </>
  );
}

export default App;
