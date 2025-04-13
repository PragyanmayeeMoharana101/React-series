import styles from "./search.module.css"
import { useEffect, useState } from "react"

export default function Search ({setFoodData}){
    const[query,setQuery]= useState("pizza");
    const URL = "https://api.spoonacular.com/recipes/complexSearch"
    const API_KEY = "641400cdd8584319951962caabfc7045"
    useEffect(()=>{
        async function fetchFood(){
            const data = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const res = await data.json();
            setFoodData(res.results)
        }
        fetchFood();
    },[query])
    return(
    <div className={styles.searchContainer}>
        <input type="text" className={styles.searchItem} value={query} onChange={(e)=>(setQuery(e.target.value))} />
    </div>
        
    
    )
}