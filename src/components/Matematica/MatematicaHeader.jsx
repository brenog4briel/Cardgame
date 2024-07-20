import styles from "./MatematicaHeader.module.css";
import { useNavigate } from "react-router-dom";

function MatematicaHeader() {

    const navigate = useNavigate();

    return (
        <header className = {styles.container}>
            <button className = {styles.btnBackToMain} onClick = {() => {navigate("/")}}>Voltar</button>
            <h1 className = {styles.fonte}>Matemática!</h1>
        </header>
    );
}

export default MatematicaHeader;