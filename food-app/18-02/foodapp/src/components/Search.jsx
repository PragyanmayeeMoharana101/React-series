import { useEffect, useState } from "react"
import styles from "./search.module.css"
export default function Search({setFoodData}){
    const [query,setQuery]= useState("")
    const URL = "https://api.spoonacular.com/recipes/complexSearch";
    const API_KEY = "641400cdd8584319951962caabfc7045"
    useEffect(()=>{
        async function fetchFood(){
            const data = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const res =await data.json();
            setFoodData(res.results); 
        }
        fetchFood();
    },[query])
    return(
        <div className={styles.searchContainer}>
            <input type="text" className={styles.searchItem} onChange={((e)=>setQuery(e.target.value))} value={query}/>
        </div>
    )
}