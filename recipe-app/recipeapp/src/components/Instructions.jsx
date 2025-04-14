import styles from "./instruction.module.css"
export default function ({instructions}){
    return(
        <div className={styles.instruction}>
            <h3 className={styles.title}>Instructions</h3>
            {
            instructions.map((instr)=>{
                return <p key={instr}>{instr}</p> 
                        
            })
        }
        </div>
    )
}