import Wrapper from "../../../components/wrapper"
import MainContainer from "../../../components/MainContainer"
import AxiosInstance from "../../../axiosInstance"
import { useEffect, useState } from "react"
import GridContainer from "../../../components/gridContainer"
import GridElement from "../../../components/gridElement"
import backgroundImage from "../../../assets/background/portugues.jpg"
import cardImage from "../../../assets/card/portugues.jpg"

export default function Portugues() {

  const [data,setData] = useState([])

  const fetchData = async() => {
    AxiosInstance.get("/portugues")
    .then((res) => {
      setData(res.data)
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
