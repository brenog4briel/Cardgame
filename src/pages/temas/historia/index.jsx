import Wrapper from "../../../components/wrapper"
import MainContainer from "../../../components/MainContainer"
import AxiosInstance from "../../../axiosInstance"
import { useEffect, useState } from "react"
import GridContainer from "../../../components/gridContainer"
import GridElement from "../../../components/gridElement"
import backgroundImage from "../../../assets/background/historia.jpg"
import cardImage from "../../../assets/card/historia.jpg"
import cardRespondido from "../../../assets/card/respondido.jpg"
import Question from "../../../components/question/index"
import BackIcon from "../../../components/backIcon"

export default function Historia() {

  const [data,setData] = useState([])
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [question,setQuestion] = useState({})

  const fetchData = async() => {
    AxiosInstance.get("/historia")
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleInModal = (id) => {
    const aux = [...data]
    const tmpQuestion =  aux.filter((e,index) => index === id)
    setQuestion(tmpQuestion[0])
    setIsModalOpen(oldValue => !oldValue)
    const tmp = [...data]
    tmp[id].respondida = true;
    setData(tmp)
    
  }

  const handleOutModal = () => {
    setIsModalOpen(oldValue => !oldValue)
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <MainContainer image={backgroundImage}>
      <Wrapper>
        <BackIcon/>
        {isModalOpen ? <Question data={question} handleInModal={handleInModal} handleOutModal={handleOutModal}/> :
        <GridContainer>
            {data.map((e,index) => (
              e.respondida ? 
              <GridElement key={index} image={e.respondida ? cardRespondido: cardImage}></GridElement>
              :
              <GridElement key={index} image={e.respondida ? cardRespondido: cardImage} handleModal={() => handleInModal(index)}></GridElement> 
              
            ))}
        </GridContainer>
        }
      </Wrapper>
    </MainContainer>
  )
}
