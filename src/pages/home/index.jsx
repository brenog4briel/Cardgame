import { useContext, useState } from "react"
import styles from "./home.module.css"
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/wrapper";
import MainContainer from "../../components/MainContainer";
import logo from "../../assets/logo/logo.png"
import { ScoreContext } from "../../contexts/ScoreContext";

export default function Home() {

  const [tema,setTema] = useState("fisica");
  const [name,setName] = useState("")

  const navigate = useNavigate()

  const handleChangeTema = (e) => {
    setTema(e.target.value)
  }
  const {handleUsername} = useContext(ScoreContext)
  const username = sessionStorage.getItem("username")

  const handleClick = () => {
    handleUsername(name)
  }

  return (
    <MainContainer>
      <Wrapper>

        <img src={logo} alt="logo" className={styles.logo}/>

        <div className={styles.content}>
          <h3>{username ? "Selecione o tema que deseja ser testado" : "Digite o seu nickname"}</h3>
            {username ? 
          <FormControl sx={{width:"50%"}}>
            <InputLabel id="temas">{username ? "Temas" : "Nickname"}</InputLabel>
            <Select
              labelId="temas"
              id="temas"
              value={tema}
              label="Temas"
              onChange={handleChangeTema}
              sx={{textAlign:"initial"}}
            >
              <MenuItem value="fisica">Física</MenuItem>
              <MenuItem value="matematica">Matemática</MenuItem>
              <MenuItem value="historia">Historia</MenuItem>
              <MenuItem value="geografia">Geografia</MenuItem>
              <MenuItem value="portugues">Português</MenuItem>
              <MenuItem value="quimica">Química</MenuItem>
            </Select>
          </FormControl>
          :
            <FormControl sx={{ width: "50%" }}>
                  <TextField
                    type="text"
                    variant="outlined"
                    label="Nickname"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
          }
          <Button variant="contained" sx={{backgroundColor:"green","&:hover":{backgroundColor:"green"}}} onClick={username ? () => navigate(`/disciplina/${tema}`) : handleClick}>{username ? "Selecionar" : "Escolher"}</Button>
        </div>
        
      </Wrapper>
    </MainContainer>
  )
}
