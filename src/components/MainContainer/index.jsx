import styles from "./mainContainer.module.css"

export default function MainContainer({children,image}) {
  return (
    <div className={styles.container} style={{backgroundImage:`url(${image})`}}>
        {children}
    </div>
  )
}
