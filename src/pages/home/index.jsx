import { useState } from "react"
import styles from "./home.module.css"
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import MainContainer from "../../components/MainContainer";

export default function Home() {

  const [tema,setTema] = useState("");
  const navigate = useNavigate()

  const handleChangeTema = (e) => {
    setTema(e.target.value)
  }

  return (
    <MainContainer>
      <Wrapper>

        <h1>Cardgame</h1>

        <div className={styles.content}>
          <h2>Selecione o tema que deseja ser testado</h2>
          <FormControl sx={{width:"50%"}}>
            <InputLabel id="temas">Temas</InputLabel>
            <Select
              labelId="temas"
              id="temas"
              value={tema}
              label="Temas"
              onChange={handleChangeTema}
            >
              <MenuItem value="fisica">Física</MenuItem>
              <MenuItem value="matematica">Matemática</MenuItem>
              <MenuItem value="historia">Historia</MenuItem>
              <MenuItem value="geografia">Geografia</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" sx={{backgroundColor:"green","&:hover":{backgroundColor:"green"}}} onClick={() => navigate(`/disciplina/${tema}`)}>Selecionar</Button>
        </div>
        
      </Wrapper>
    </MainContainer>
  )
}
