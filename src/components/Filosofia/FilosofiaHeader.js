import styles from "./FilosofiaHeader.module.css";
import { useNavigate } from "react-router-dom";

function FilosofiaHeader() {

    const navigate = useNavigate();

    return (
        <header className = {styles.container}>
            <button className = {styles.btnBackToMain} onClick = {() => {navigate("/")}}>Voltar</button>
            <h1 className = {styles.fonte}>Filosofia!</h1>
        </header>
    );
}

export default FilosofiaHeader;