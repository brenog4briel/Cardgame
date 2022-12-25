import styles from "./GeografiaHeader.module.css";

function GeografiaHeader() {
    return (
        <header className = {styles.container}>
            <h1 className = {styles.fonte}>Geografia!</h1>
        </header>
    );
}

export default GeografiaHeader;