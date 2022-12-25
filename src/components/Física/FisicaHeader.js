import styles from "./FisicaHeader.module.css";

function FisicaHeader() {
    return (
        <header className = {styles.container}>
            <h1 className = {styles.fonte}>Física!</h1>
        </header>
    );
}

export default FisicaHeader;