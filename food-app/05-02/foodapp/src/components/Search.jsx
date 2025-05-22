import { useEffect, useState } from "react"

export default function Search(){
    const [query,setQuery] = useState("pizza")
    const [foodData , setFoodData] = useState([])
    useEffect (()=>{
        async function fetchFood (){
            const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?cuisine=italian&apiKey=925c00949a414905b5b8e91b6a9ce03b")
            //console.log(data)
            const res = await data.json();
            // console.log(res.results)
            setFoodData(res.results)
            console.log(foodData)
        }
        fetchFood();
    },[query])
    return (
        <>
        <input type="text" onChange={(e)=>setQuery(e.target.value)} value={query}/>
        </>
    )
}