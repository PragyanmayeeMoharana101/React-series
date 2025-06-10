import { useEffect, useState } from "react"
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "925c00949a414905b5b8e91b6a9ce03b"
export default function Search({setFoodData}){
    const [query,setQuery] = useState("pizza")
    
    useEffect (()=>{
        async function fetchFood (){
            const data = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            //console.log(data)
            const res = await data.json();
            // console.log(res.results)
            setFoodData(res.results)
            
        }
        fetchFood();
    },[query])
    return (
        <>
        <input type="text" onChange={(e)=>setQuery(e.target.value)} value={query}/>
        {/* {console.log(foodData)} */}
        
        </>
    )
}