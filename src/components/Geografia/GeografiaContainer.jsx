import styles from "./GeografiaContainer.module.css"
import GeografiaHeader from "./GeografiaHeader";
import GeografiaMain from "./GeografiaMain";
import GeografiaFooter from "./GeografiaFooter";

function GeografiaContainer() {
    return (
        <div className = {styles.container}>
            <GeografiaHeader></GeografiaHeader>
            <GeografiaMain></GeografiaMain>
            <GeografiaFooter></GeografiaFooter>
        </div>
    );
}

export default GeografiaContainer;