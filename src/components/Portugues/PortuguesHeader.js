import styles from "./PortuguesHeader.module.css";

function PortuguesHeader() {
    return (
        <header className = {styles.container}>
            <h1 className = {styles.fonte}>Português!</h1>
        </header>
    );
}

export default PortuguesHeader;