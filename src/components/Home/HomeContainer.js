import styles from "./HomeContainer.module.css"
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import HomeFooter from "./HomeFooter";

function Home() {
    return (
        <div className = {styles.container}>
            <HomeHeader></HomeHeader>
            <HomeMain></HomeMain>
            <HomeFooter></HomeFooter>
        </div>
    );
}

export default Home;