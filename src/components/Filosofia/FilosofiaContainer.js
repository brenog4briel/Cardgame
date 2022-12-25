import styles from "./FilosofiaContainer.module.css"
import FilosofiaHeader from "./FilosofiaHeader";
import FilosofiaMain from "./FilosofiaMain";
import FilosofiaFooter from "./FilosofiaFooter";

function FilosofiaContainer() {
    return (
        <div className = {styles.container}>
            <FilosofiaHeader></FilosofiaHeader>
            <FilosofiaMain></FilosofiaMain>
            <FilosofiaFooter></FilosofiaFooter>
        </div>
    );
}

export default FilosofiaContainer;