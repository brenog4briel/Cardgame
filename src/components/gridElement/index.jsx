import styles from "./gridElement.module.css"
export default function GridElement({children,image}) {
  return (
    <div className={styles.container} style={{backgroundImage:`url(${image})`}}>
        {children}
    </div>
  )
}
