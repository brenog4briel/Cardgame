import { useContext } from "react"
import styles from "./header.module.css"
import { ScoreContext } from "../../contexts/ScoreContext"
export default function Header() {

  const {username,score} = useContext(ScoreContext)

  return (
    <header className={styles.container}>
        <div className={styles.titles}>
          {username ? 
          <>
          <h2>{username ? `Olá ${username}` : ""}</h2>
          <h2>{`Total de acertos: ${score}`}</h2>
          </> : <h1 className={styles.title}>CARDGAME</h1>}
          
            
        </div>
    </header>
  )
}
