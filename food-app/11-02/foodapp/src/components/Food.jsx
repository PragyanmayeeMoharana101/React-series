import { useEffect, useState } from "react"
import FoodList from "./FoodList"
import styles from "./search.module.css"
const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "925c00949a414905b5b8e91b6a9ce03b"
export default function Food(){
    const[query, setQuery]=useState("")
    const[foodData, setFoodData]=useState([])
    useEffect(()=>{
        async function fetchFood() {
            const data = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const res = await data.json()
            setFoodData(res.results)
        }
        fetchFood()
    },[query])
    return (
        <>
            <input className={styles.search} type="text" onChange={((e)=>setQuery(e.target.value))} value={query} />
            <FoodList foodData={foodData}/>
        </>
    )
}