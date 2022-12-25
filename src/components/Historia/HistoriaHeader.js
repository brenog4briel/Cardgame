import styles from "./HistoriaHeader.module.css";

function HistoriaHeader() {
    return (
        <header className = {styles.container}>
            <h1 className = {styles.fonte}>História!</h1>
        </header>
    );
}

export default HistoriaHeader;