import styles from "./FilosofiaHeader.module.css";

function FilosofiaHeader() {
    return (
        <header className = {styles.container}>
            <h1 className = {styles.fonte}>Filosofia!</h1>
        </header>
    );
}

export default FilosofiaHeader;