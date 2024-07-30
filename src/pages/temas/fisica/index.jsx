import Wrapper from "../../../components/wrapper"
import MainContainer from "../../../components/MainContainer"
import AxiosInstance from "../../../axiosInstance"
import { useEffect, useState } from "react"
import GridContainer from "../../../components/gridContainer"
import GridElement from "../../../components/gridElement"
import backgroundImage from "../../../assets/background/fisica.jpg"
import cardImage from "../../../assets/card/fisica.jpg"
import cardRespondido from "../../../assets/card/respondido.jpg"
import Question from "../../../components/question/index"
import BackIcon from "../../../components/backIcon"

export default function Fisica() {

  const [data,setData] = useState([])
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [question,setQuestion] = useState({})

  const fetchData = async() => {
    AxiosInstance.get("/fisica")
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleModal = (id) => {
    const tmpQuestion =  data.filter((e,index) => index === id)
    setQuestion(tmpQuestion[0])
    setIsModalOpen(oldValue => !oldValue)
    let tmp = [...data];
    console.log(tmp)
    setData(tmp)
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <MainContainer image={backgroundImage}>
      <Wrapper>
        <BackIcon/>
        {isModalOpen ? <Question data={question} handleModal={handleModal}/> :
        <GridContainer>
            {data.map((e,index) => (
              e.respondida ? 
              <GridElement key={index} image={e.respondida ? cardRespondido: cardImage}></GridElement>
              :
              <GridElement key={index} image={e.respondida ? cardRespondido: cardImage} handleModal={() => handleModal(index)}></GridElement> 
              
            ))}
        </GridContainer>
        }
      </Wrapper>
    </MainContainer>
  )
}
