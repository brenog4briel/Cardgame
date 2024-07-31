import { useContext } from "react"
import styles from "./header.module.css"
import { ScoreContext } from "../../contexts/ScoreContext"
export default function Header() {
  
  const {score} = useContext(ScoreContext)
  const username = sessionStorage.getItem("username")

  return (
    <header className={styles.container}>
        <div className={styles.titles} style={{justifyContent: username ? "space-evenly":"center"}}>
          {username ? 
          <>
          <h1 className={styles.title}>CARDGAME</h1>
          <div className={styles.user_info}>
            <h2>{username ? `Olá ${username}` : ""}</h2>
            <h2>{`Total de acertos: ${score}`}</h2>
          </div>
          </> : <h1 className={styles.title}>CARDGAME</h1>}
          
            
        </div>
    </header>
  )
}
