import styles from "./HomeMain.module.css"
import {useState} from "react";
import { Link } from "react-router-dom";

const temas = ['História','Geografia','Português', 'Matemática','Física','Química','Filosofia','Sociologia'];
var path = "";


function HomeMain() {

    const [options,setOptions] = useState(temas[0]);


    function setPath(opt) {
        
        switch(opt) {
            case "História":
                return "historia";
            case "Geografia":
                return "geografia";
            case "Português":
                return "portugues";
            case "Matemática":
                return "matematica";
            case "Física":
                return "fisica";
            case "Química":
                return "quimica";
            case "Filosofia":
                return "filosofia";
            default:
                return "sociologia";
                
        }
        
    }

    return (
    <main className = {styles.container}>
        <div className = {styles.contorno}>
            
            <h2 className = {styles.fonte}>Escolha o tema em que você quer ser testado!</h2>

            <select className = {styles.slct} value = {options} onChange = {(e) => setOptions(e.target.value)}>
                {temas.map((value) => (
                    <option value = {value} key = {value}>
                        {value}
                    </option>
                ))}
            </select>

            <Link className = {styles.btn} to = {`/${setPath(options)}`}>Enviar Escolha</Link>

        </div>



    </main>
    );
}

export default HomeMain;