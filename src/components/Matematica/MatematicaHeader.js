import styles from "./MatematicaHeader.module.css";

function MatematicaHeader() {
    return (
        <header className = {styles.container}>
            <h1 className = {styles.fonte}>Matemática!</h1>
        </header>
    );
}

export default MatematicaHeader;