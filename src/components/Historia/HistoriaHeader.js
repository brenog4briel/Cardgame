import styles from "./HistoriaHeader.module.css";
import { useNavigate } from "react-router-dom";

function HistoriaHeader() {

    const navigate = useNavigate();

    return (
        <header className = {styles.container}>
            <button className = {styles.btnBackToMain} onClick = {() => {navigate("/")}}>Voltar</button>
            <h1 className = {styles.fonte}>História!</h1>
        </header>
    );
}

export default HistoriaHeader;