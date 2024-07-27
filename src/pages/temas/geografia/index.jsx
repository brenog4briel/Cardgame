import Wrapper from "../../../components/wrapper"
import MainContainer from "../../../components/MainContainer"
import AxiosInstance from "../../../axiosInstance"
import { useEffect, useState } from "react"
import GridContainer from "../../../components/gridContainer"
import GridElement from "../../../components/gridElement"
import backgroundImage from "../../../assets/background/geografia.jpg"
import cardImage from "../../../assets/card/geografia.jpg"
import Question from "../../../components/question/index"

export default function Geografia() {

  const [data,setData] = useState([])
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [question,setQuestion] = useState({})

  const fetchData = async() => {
    AxiosInstance.get("/geografia")
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
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <MainContainer image={backgroundImage}>
      <Wrapper>
        {isModalOpen ? <Question data={question} handleModal={handleModal}/> :
        <GridContainer>
            {data.map((_,index) => (
              <GridElement key={index} image={cardImage} handleModal={() => handleModal(index)}></GridElement>
            ))}
        </GridContainer>
        }
      </Wrapper>
    </MainContainer>
  )
}
