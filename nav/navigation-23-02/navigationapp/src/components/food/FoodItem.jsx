import styles from "./fooditem.module.css"
export default function FoodItem({item,setFoodId}){
   function handleClick(){
    setFoodId(item.id);
   }
    return (
        <div className={styles.foodCard}>
            <img className={styles.foodImage} src={item.image}  />
            <h3 className={styles.foodTitle}>{item.title}</h3>
            <button className={styles.foodButton} onClick={handleClick}>VIEW RECIPE</button>
        </div>
    )
}