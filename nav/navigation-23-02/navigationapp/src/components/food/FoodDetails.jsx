import styles from "./fooddetails.module.css"
import { useEffect, useState } from "react"

export default function FoodDetails({foodId}){
    const [food,setFood]= useState({});
    const [isLoading, setaIsLoading]= useState(true)
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;
    const IMAGE_URL = "https://img.spoonacular.com/ingredients_100x100/"
    const API_KEY='641400cdd8584319951962caabfc7045';
    useEffect(()=>{
            async function fetchFood(){
                const data= await fetch(`${URL}?apiKey=${API_KEY}`)
                const res = await data.json();
                setFood(res);
                setaIsLoading(false)
            }
            fetchFood();
        },[foodId])


    return(
        <div className={styles.fooddetails}>
            <h1>Food-Details</h1>
            <div>
                <h4>{food.title}</h4>
                <img className={styles.foodimage} src={food.image} alt="" />

                <div className={styles.details}>
                    <span>⏱️{food.readyInMinutes}</span>
                    <span>👨‍👩‍👧‍👦{food.servings}</span>
                    <span>{food.vegetarian ? "🥕 vegetarian" : "🍗 non-vegetarian"}</span>
                    <span>{food.vegan ? "🐄 vegan" : ""}</span>
               </div>
               
               <div className={styles.price}>
                    <span>💲{food.pricePerServing}</span>
               </div>


            </div>
            <div>
                <h1>INGREDIENTS</h1>
                <div>
                {
                    isLoading?("loading...."):(food.extendedIngredients.map((ingre)=>{
                        return(
                            <div className={styles.ingredients} key={ingre.id}>
                            <div><img className={styles.itemImage} src={`${IMAGE_URL}${ingre.image}`} alt="" /></div>
                            <div><p>{ingre.name}</p>
                            <p>amount: {ingre.unit}</p></div>
                            
                            </div>
                        )
                        
                    
                    
                    }))}
                
                </div>
                
            </div>


            <div>
                <h1>INSTRUCTIONS</h1>
                <div>
                {
                    isLoading?("loading...."):(food.analyzedInstructions[0].steps.map((step)=>{
                        return(
                            <div className={styles.instructions} key={step.number}>
                                <li>{step.step}</li>
                            
                            </div>
                        )
                        
                    
                    
                    }))}
                
                </div>

            </div>

        </div>
    )
}