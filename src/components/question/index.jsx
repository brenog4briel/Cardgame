import { useContext, useEffect, useState } from "react"
// import BackIcon from "../backIcon"
import styles from "./question.module.css"
import Popup from "../popup"
import { ScoreContext } from "../../contexts/ScoreContext"

export default function Question({data,handleModal}) {

  const tmp = Object.entries(data)
  const aux = tmp.slice(1,5)
  const {AddScore} = useContext(ScoreContext)
  const [order,setOrder] = useState([]);
  const [isAnswered,setIsAnswered] = useState(false)
  const [activePopUp,setActivePopUp] = useState(false)
  const [popUpMessage,setPopUpMessage] = useState("")
  const [isCorrect,setIsCorrect] = useState(false)

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

  const closeModal = () => {
    setTimeout(() => {
      handleModal()
    },[2500])
  }

  const isCorrectOption = (value) => {
    setIsAnswered(oldValue => !oldValue)
    if (value === "opcaoCorreta") {
      setIsCorrect(true)
      setPopUpMessage("Resposta correta! Muito bem")
      setActivePopUp(true)
      AddScore();
      closeModal()
      
    }
    else {
      setIsCorrect(false)
      setPopUpMessage("Resposta incorreta! Tente novamente")
      setActivePopUp(true)
      closeModal()
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.title}>
        <h3>{data.titulo}</h3>
      </div>
      
      <div className={styles.grid_container}>
        {order.map((e) => (
        <div key={e[0]} className={styles.grid_element}  style={{border: (e[0] === "opcaoCorreta" && isAnswered) ? "3px solid green" : (e[0] !== "opcaoCorreta" && isAnswered) ? "3px solid red" : "none"}} onClick={() => isCorrectOption(e[0])}>
          <p>{e[1]}</p>
        </div>
        ))}
      </div>
      {activePopUp && <Popup mensagem={popUpMessage} isCorrect={isCorrect}/>}
    </div>
  )
}
