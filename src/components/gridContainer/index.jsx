import styles from "./gridContainer.module.css"

export default function GridContainer({children}) {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}
