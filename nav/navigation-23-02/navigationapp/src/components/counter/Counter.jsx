import { useState } from "react"
import styles from "./counter.module.css"
function CounterApp() {
  
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
    <div className={styles.counttext}>
    <h1>{count}</h1>
      <button className={styles.button} onClick={increaseCount}>increase</button>
      <button className={styles.button} onClick={decreaseCount}>decrease</button>
      <button className={styles.button} onClick={double}>Double</button>
      <button className={styles.button} onClick={reset}>Reset</button>
    </div>
      
    </>
  )
}

export default CounterApp
