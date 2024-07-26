import styles from "./gridElement.module.css"
export default function GridElement({children,image,handleModal}) {
  return (
    <div className={styles.container} style={{backgroundImage:`url(${image})`}} onClick={handleModal}>
        {children}
    </div>
  )
}
