import { useEffect, useState } from "react";

export default function FoodDetails({foodId})
{
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;

    const API_KEY='641400cdd8584319951962caabfc7045';

    const [food, setFood] = useState({})
    
    useEffect(()=>{
            async function fetchFood(){
                const data=await fetch(`${URL}?apiKey=${API_KEY}`)
                // console.log(data);
                const res= await data.json()
                // console.log(res.results);
                // setFoodData(res.results);
                
                setFood(res)
                
            }
            fetchFood();
        },[foodId])
    return(
        <div >
            <h1>Food Details-</h1>
            <div>
            <p>{food.title}</p>
            <img src={food.image} alt="" />
            
            
            </div>
            
            
        </div>
    )
}