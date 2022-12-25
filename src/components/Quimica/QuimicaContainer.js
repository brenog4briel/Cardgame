import styles from "./QuimicaContainer.module.css"
import QuimicaHeader from "./QuimicaHeader";
import QuimicaMain from "./QuimicaMain";
import QuimicaFooter from "./QuimicaFooter";

function QuimicaContainer() {
    return (
        <div className = {styles.container}>
            <QuimicaHeader></QuimicaHeader>
            <QuimicaMain></QuimicaMain>
            <QuimicaFooter></QuimicaFooter>
        </div>
    );
}

export default QuimicaContainer;