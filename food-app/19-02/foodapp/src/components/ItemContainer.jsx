import styles from "./itemContainer.module.css"
export default function ItemContainer({children}){
    
    return(
        <div className={styles.itemContainer}>
            {children}
        </div>
    )
}