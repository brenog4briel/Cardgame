import { IconButton } from "@mui/material";
import styles from "./header.module.css"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()

  return (
    <header className={styles.container}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackOutlinedIcon/>
        </IconButton>
        <h2>Teste os seus conhecimentos</h2>
        <h2>Score: </h2>
    </header>
  )
}
