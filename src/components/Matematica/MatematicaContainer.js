import styles from "./MatematicaContainer.module.css"
import MatematicaHeader from "./MatematicaHeader";
import MatematicaMain from "./MatematicaMain";
import MatematicaFooter from "./MatematicaFooter";

function MatematicaContainer() {
    return (
        <div className = {styles.container}>
            <MatematicaHeader></MatematicaHeader>
            <MatematicaMain></MatematicaMain>
            <MatematicaFooter></MatematicaFooter>
        </div>
    );
}

export default MatematicaContainer;