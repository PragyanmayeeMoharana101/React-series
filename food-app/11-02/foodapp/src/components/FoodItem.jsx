import styles from "./fooditem.module.css"
export default function FoodItem ({item}){
    return(
        <div className={styles.itemContainer}>
            <img src={item.image} className={styles.itemImage}/>
            <div className={styles.itemContent}><p className={styles.itemName}>{item.title}</p></div>
            <div className={styles.buttonContainer}><button className={styles.itemButton}>VIEW RECIPE</button></div>
            
            
        </div>
        
    )
}