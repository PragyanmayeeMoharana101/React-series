import styles from "./itemcontainer.module.css"
export default function ItemContainer ({children}){
    return(
        <div className={styles.itemcontainer}>
            {children}
        </div>
    )
}