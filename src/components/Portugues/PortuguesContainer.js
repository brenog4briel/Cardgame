import styles from "./PortuguesContainer.module.css"
import PortuguesHeader from "./PortuguesHeader";
import PortuguesMain from "./PortuguesMain";
import PortuguesFooter from "./PortuguesFooter";

function PortuguesContainer() {
    return (
        <div className = {styles.container}>
            <PortuguesHeader></PortuguesHeader>
            <PortuguesMain></PortuguesMain>
            <PortuguesFooter></PortuguesFooter>
        </div>
    );
}

export default PortuguesContainer;