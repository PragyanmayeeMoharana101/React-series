import styles from "./itemCards.module.css"
export default function FoodItem({item,setFoodId}){
    function handleClick(){
        setFoodId(item.id)
    }
    return (
        <div className={styles.itemCards}>
            <img className={styles.image} src={item.image}/>
            <h2 className={styles.title}>{item.title}</h2>
            <button className={styles.itembutton} onClick={handleClick}>VIEW RECIPE</button>
        </div>
    )
}