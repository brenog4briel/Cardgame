import styles from "./PortuguesHeader.module.css";
import { useNavigate } from "react-router-dom";

function PortuguesHeader() {

    const navigate = useNavigate();

    return (
        <header className = {styles.container}>
            <button className = {styles.btnBackToMain} onClick = {() => {navigate("/")}}>Voltar</button>
            <h1 className = {styles.fonte}>Português!</h1>
        </header>
    );
}

export default PortuguesHeader;