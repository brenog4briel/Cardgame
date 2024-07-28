import { useContext } from "react"
import BackIcon from "../backIcon"
import styles from "./header.module.css"
import { ScoreContext } from "../../contexts/ScoreContext"
export default function Header() {

  const {score,AddScore} = useContext(ScoreContext)

  return (
    <header className={styles.container}>
        <BackIcon/>
        <div className={styles.titles}>
          <h2>Teste os seus conhecimentos</h2>
          <h2>Score: {score}</h2>
        </div>
    </header>
  )
}
