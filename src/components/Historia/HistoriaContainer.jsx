import styles from "./HistoriaContainer.module.css"
import HistoriaHeader from "./HistoriaHeader";
import HistoriaMain from "./HistoriaMain";
import HistoriaFooter from "./HistoriaFooter";

function HistoriaContainer() {
    return (
        <div className = {styles.container}>
            <HistoriaHeader></HistoriaHeader>
            <HistoriaMain></HistoriaMain>
            <HistoriaFooter></HistoriaFooter>
        </div>
    );
}

export default HistoriaContainer;