import styles from "./foodDetails.module.css"
import { useEffect, useState } from "react";

export default function FoodDetails({foodId})
{
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY='925c00949a414905b5b8e91b6a9ce03b';
    const IMAGE_URL = "https://img.spoonacular.com/ingredients_100x100/"

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
        <div className={styles.foodDetails}>
            <div>
            <h1>Food Details-</h1>
            <div>
            <p>{food.title}</p>
            <img src={food.image} alt="" />
           
            <div className={styles.details}>
                <span>⏱️{food.readyInMinutes}</span>
                <span>👨‍👩‍👧‍👦{food.servings}</span>
                <span>{food.vegetarian ? "🥕 vegetarian" : "🍗 non-vegetarian"}</span>
                <span>{food.vegan ? "🐄 vegan" : ""}</span>
            </div>
            <div className={styles.price}>
                💲<span>{food.pricePerServing}</span>
            </div>
            </div>
            </div>
            

            <div >
                <h1>Ingredients</h1>
                <div className={styles.ingredientscont}>
                {isLoading? ("loading..."):(food.extendedIngredients.map((ingre)=>{
                    return (
                        <>
                        <div className={styles.ingredients}>
                        <div><img className={styles.itemImage} src={`${IMAGE_URL}${ingre.image}`} alt="image" /></div>
                            <div><h4>{ingre.name}</h4>
                            <span>amount: {ingre.amount} </span>
                            <span> {ingre.unit}</span></div>
                        </div>
                            
                            
                            
                        </>
                    )
                }))}
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