import styles from "./FisicaContainer.module.css"
import FisicaHeader from "./FisicaHeader";
import FisicaMain from "./FisicaMain";
import FisicaFooter from "./FisicaFooter";

function FisicaContainer() {
    return (
        <div className = {styles.container}>
            <FisicaHeader></FisicaHeader>
            <FisicaMain></FisicaMain>
            <FisicaFooter></FisicaFooter>
        </div>
    );
}

export default FisicaContainer;