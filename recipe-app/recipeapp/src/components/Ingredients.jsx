import styles from "./ingrediants.module.css"
export default function ({ingrediants}){
    return(
        <div className={styles.ingrediant}>
            <h3 className={styles.title}>Ingrediants</h3>
            {
            ingrediants.map((igre)=>{
                return <p key={igre}>{igre}</p> 
                        
            })
        }
        </div>
    )
}