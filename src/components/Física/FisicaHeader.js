import styles from "./FisicaHeader.module.css";
import { useNavigate } from "react-router-dom";

function FisicaHeader() {

    const navigate = useNavigate();

    return (
        <header className = {styles.container}>
            <button className = {styles.btnBackToMain} onClick = {() => {navigate("/")}}>Voltar</button>
            <h1 className = {styles.fonte}>Física!</h1>
        </header>
    );
}

export default FisicaHeader;