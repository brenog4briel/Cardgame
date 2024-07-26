import BackIcon from "../backIcon"
import styles from "./question.module.css"

export default function Question({data,handleModal}) {
  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <BackIcon handleModal={handleModal}/>
        <h3>{data.titulo}</h3>
      </div>

      <div className={styles.grid_container}>
        <div className={styles.grid_element}>
          <p>{data.opcao1}</p>
        </div>
        <div className={styles.grid_element}>
          <p>{data.opcao2}</p>
        </div>
        <div className={styles.grid_element}>
          <p>{data.opcao3}</p>
        </div>
        <div className={styles.grid_element}>
          <p>{data.opcaoCorreta}</p>
        </div>
      </div>
    </div>
  )
}
