import styles from "./search.module.css"
import { useEffect,useState } from "react"
const URL="https://api.spoonacular.com/recipes/complexSearch";
const API_KEY="4696c8d037944deba91e3267e0d77c4d";


export default function Search({setFoodData}){
    const[query,setQuery]=useState("pizza")
    
    useEffect(()=>{
        async function fetchFood(){
            const data=await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            // console.log(data);
            const res= await data.json()
            // console.log(res.results);
            setFoodData(res.results);
           
        }
        fetchFood();
    },[query])
    return(
        <div className={styles.searchContainer}>

            <input type="text" onChange={(e)=>setQuery(e.target.value)} value={query} className={styles.input} />
            {/* { console.log(foodData)} */}
            
        </div>
    )
}