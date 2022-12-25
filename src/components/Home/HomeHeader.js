import styles from "./HomeHeader.module.css";

function HomeHeader() {
    return (
        <header className = {styles.container}>
            <h1 className = {styles.fonte}>Teste os seus conhecimentos!</h1>
        </header>
    );
}

export default HomeHeader;