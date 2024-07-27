import { useEffect, useState } from "react"
import BackIcon from "../backIcon"
import styles from "./question.module.css"
import Popup from "../popup"

export default function Question({data,handleModal}) {

  const tmp = Object.entries(data)
  const aux = tmp.slice(1,5)
  const [order,setOrder] = useState([]);
  const [isAnswered,setIsAnswered] = useState(false)
  const [activePopUp,setActivePopUp] = useState(false)
  const [popUpMessage,setPopUpMessage] = useState("")

  const orderGenerator = () => {
    let arr = [...aux]
    for (let i = 0 ; i < aux.length ; i++) {
      let random = Math.floor(Math.random() * 4);
      let tmp = arr[random]
      arr[random] = arr[i]
      arr[i] = tmp;
    }
    setOrder(arr)   
  }
  useEffect(() => {
    orderGenerator()
  },[])

  const isCorrectOption = (value) => {
    setIsAnswered(oldValue => !oldValue)
    if (value === "opcaoCorreta") {
      setPopUpMessage("Resposta correta! Muito bem")
      setActivePopUp(true)
    }
    else {
      setPopUpMessage("Resposta incorreta! Tente novamente")
      setActivePopUp(true)

    }
  }

  return (
    <div className={styles.container}>

      <BackIcon handleModal={handleModal}/>

      <div className={styles.title}>
        <h3>{data.titulo}</h3>
      </div>
      
      <div className={styles.grid_container}>
        {order.map((e) => (
        <div key={e[0]} className={styles.grid_element}  style={{border: (e[0] === "opcaoCorreta" && isAnswered) ? "3px solid green" : "none"}} onClick={() => isCorrectOption(e[0])}>
          <p>{e[1]}</p>
        </div>
        ))}
      </div>
      {activePopUp && <Popup mensagem={popUpMessage}/>}
    </div>
  )
}
