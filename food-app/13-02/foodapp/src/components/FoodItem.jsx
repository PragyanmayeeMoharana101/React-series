import styles from "./itemCards.module.css"
export default function FoodItem({item}){
    return (
        <div className={styles.itemCards}>
            <img className={styles.image} src={item.image}/>
            <h2 className={styles.title}>{item.title}</h2>
            <button className={styles.itembutton}>VIEW RECIPE</button>
        </div>
    )
}