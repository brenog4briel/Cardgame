import styles from "./popup.module.css"

export default function Popup({mensagem}) {
  return (
    <div className={styles.container}>
        <h3>{mensagem}</h3>
    </div>
  )
}
