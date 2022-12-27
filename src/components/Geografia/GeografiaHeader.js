import styles from "./GeografiaHeader.module.css";
import { useNavigate } from "react-router-dom";

function GeografiaHeader() {

    const navigate = useNavigate();

    return (
        <header className = {styles.container}>
            <button className = {styles.btnBackToMain} onClick = {() => {navigate("/")}}>Voltar</button>
            <h1 className = {styles.fonte}>Geografia!</h1>
        </header>
    );
}

export default GeografiaHeader;