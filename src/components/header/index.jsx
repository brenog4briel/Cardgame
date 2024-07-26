import BackIcon from "../backIcon"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.container}>
        <BackIcon/>
        <h2>Teste os seus conhecimentos</h2>
        <h2>Score: </h2>
    </header>
  )
}
