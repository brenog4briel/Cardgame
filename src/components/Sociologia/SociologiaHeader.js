import styles from "./SociologiaHeader.module.css";
import { useNavigate } from "react-router-dom";

function SociologiaHeader() {

    const navigate = useNavigate();

    return (
        <header className = {styles.container}>
            <button className = {styles.btnBackToMain} onClick = {() => {navigate("/")}}>Voltar</button>
            <h1 className = {styles.fonte}>Sociologia!</h1>
        </header>
    );
}

export default SociologiaHeader;