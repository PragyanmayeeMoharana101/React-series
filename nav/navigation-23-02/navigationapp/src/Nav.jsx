import styles from "./nav.module.css"
import {Link} from "react-router-dom"
export default function Nav(){
    return(
        <div className={styles.navbar}>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/todo" className={styles.link}>Todo app</Link>
            <Link to="/food" className={styles.link}>Food app</Link>
            <Link to="/card" className={styles.link}>cards app</Link>
            <Link to="/counter" className={styles.link}>counter app</Link>
            <Link to="/colorchanger" className={styles.link}>colorchanger app</Link>
            <Link to="/recipe" className={styles.link}>recipe app</Link>

        </div>
    )
}
