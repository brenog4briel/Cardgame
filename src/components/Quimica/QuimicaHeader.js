import styles from "./QuimicaHeader.module.css";
import { useNavigate } from "react-router-dom";

function QuimicaHeader() {

    const navigate = useNavigate();

    return (
        <header className = {styles.container}>
            <button className = {styles.btnBackToMain} onClick = {() => {navigate("/")}}>Voltar</button>
            <h1 className = {styles.fonte}>Química!</h1>
        </header>
    );
}

export default QuimicaHeader;