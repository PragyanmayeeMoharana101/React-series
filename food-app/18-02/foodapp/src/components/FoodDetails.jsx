import { useEffect, useState } from "react";

export default function FoodDetails({foodId})
{
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;

    const API_KEY='641400cdd8584319951962caabfc7045';

    const [food, setFood] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
            async function fetchFood(){
                const data=await fetch(`${URL}?apiKey=${API_KEY}`)
                // console.log(data);
                const res= await data.json()
                // console.log(res.results);
                // setFoodData(res.results);
                console.log(res);
                setFood(res)
                setIsLoading(false)
            }
            fetchFood();
        },[foodId])
    return(
        <div >
            <h1>Food Details-</h1>
            <div>
            <p>{food.title}</p>
            <img src={food.image} alt="" />
            <div>
                ⏱️<span>{food.readyInMinutes}</span>
                👨‍👩‍👧‍👦<span>{food.servings}</span>
                <span>{food.vegetarian ? "🥕 vegetarian" : "🍗 non-vegetarian"}</span>
                <span>{food.vegan ? "🐄 vegan" : ""}</span>
            </div>
            <div>
                💲<span>{food.pricePerServing}</span>
            </div>
            </div>
            <div>
                <h1>Instructions</h1>
                {isLoading? ("loading..."):(food.analyzedInstructions[0].steps.map((step)=>{
                        return (
                            <li>{step.step}</li>
                        )
                    })) }
                
            </div>
            
        </div>
    )
}