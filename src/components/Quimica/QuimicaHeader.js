import styles from "./QuimicaHeader.module.css";

function QuimicaHeader() {
    return (
        <header className = {styles.container}>
            <h1 className = {styles.fonte}>Química!</h1>
        </header>
    );
}

export default QuimicaHeader;