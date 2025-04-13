import styles from "./search.module.css"
import { useEffect, useState } from "react"

export default function Search ({setFoodData}){
    const [query,setQuery]= useState("pizza");
    useEffect(()=>{
        async function fetchData(){
            const data = await fetch("https://dummyjson.com/recipes")
            const res = await data.json();
            setFoodData(res.recipes)
            
        }
        fetchData();

    },[query])
        
    return(
        <div className={styles.searchContainer}>
            <input className={styles.search} type="text" onChange={((e)=>setQuery(e.target.value))} value={query} />
        </div>
    )
}