import Wrapper from "../../../components/wrapper"
import MainContainer from "../../../components/MainContainer"
import AxiosInstance from "../../../axiosInstance"
import { useEffect, useState } from "react"
import GridContainer from "../../../components/gridContainer"
import GridElement from "../../../components/gridElement"
import backgroundImage from "../../../assets/background/geografia.jpg"
import cardImage from "../../../assets/card/geografia.jpg"

export default function Geografia() {

  const [data,setData] = useState([])

  const fetchData = async() => {
    AxiosInstance.get("/geografia")
    .then((res) => {
      setData(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <MainContainer image={backgroundImage}>
      <Wrapper>
        <GridContainer>
          {data.map((_,index) => (
            <GridElement key={index} image={cardImage}></GridElement>
          ))}
        </GridContainer>
      </Wrapper>
    </MainContainer>
  )
}
