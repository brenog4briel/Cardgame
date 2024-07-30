import styles from "./popup.module.css"

export default function Popup({mensagem,isCorrect}) {
  return (
    <div className={styles.container} style={{border: isCorrect ? "1px solid green" : "1px solid red"}}>
        <h3>{mensagem}</h3>
    </div>
  )
}
