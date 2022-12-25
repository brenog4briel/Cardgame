import styles from "./SociologiaContainer.module.css"
import SociologiaHeader from "./SociologiaHeader";
import SociologiaMain from "./SociologiaMain";
import SociologiaFooter from "./SociologiaFooter";

function SociologiaContainer() {
    return (
        <div className = {styles.container}>
            <SociologiaHeader></SociologiaHeader>
            <SociologiaMain></SociologiaMain>
            <SociologiaFooter></SociologiaFooter>
        </div>
    );
}

export default SociologiaContainer;