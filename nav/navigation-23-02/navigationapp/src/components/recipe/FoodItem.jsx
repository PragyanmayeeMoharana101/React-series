
import styles from "./fooditem.module.css"
export default function FoodItem({item, setIngrediants,setInstructions}){
    
    function handleInstruction(){
       
        setInstructions(item.instructions)
    }
    function handleIngridiants(){
        setIngrediants(item.ingredients);
        
    }
    return (
        
            <div className={styles.cards}>
                <img className={styles.image} src={item.image}/>
                <h2 className={styles.name}>{item.name}</h2>
                <h3 className={styles.ratings}>Ratings: {item.rating}</h3>
                <button onClick={handleInstruction} className={styles.button}>INSTRUCTIONS</button>
                <button onClick={handleIngridiants} className={styles.button}>INGRIDIENTS</button>
        </div>
        
        
        
        
    )
    
}