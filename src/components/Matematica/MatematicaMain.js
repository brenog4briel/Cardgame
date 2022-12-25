import styles from "./MatematicaMain.module.css"
import {useState} from "react"

const baseURL = "http://localhost:8082";

var option1,option2,option3,option4;

function MatematicaMain() {

    const [isOpen,setIsOpen] = useState(false);

    function consumindoAPI () {
        fetch(`${baseURL}/questions`)
    .then(response => response.json())
    .then(json => setQuestions(json[0]))
    .catch(error => console.log(error))
    }

    const setQuestions = (data) => {
        
        document.querySelector(`#tituloPergunta`).innerHTML = data.titulo;

        orderOptions(data);
    }

    function orderOptions(data) {

        let order = generateOrder();

        option1 = document.querySelector(`#option${order[0]}`)

        option2 = document.querySelector(`#option${order[1]}`)

        option3 = document.querySelector(`#option${order[2]}`)

        option4 = document.querySelector(`#option${order[3]}`)


        option1.innerHTML = data.opcao1;

        option2.innerHTML = data.opcao2;

        option3.innerHTML = data.opcao3;

        option4.innerHTML = data.opcaoCorreta;
        
    }

    function generateOrder() {
        
        let numbers = [];

        for (let i = 1 ; i <= 4; i++) {
            if (numbers.length === 0) {numbers.push(Math.floor(Math.random() * 4) + 1)}
            else {
                let number = Math.floor(Math.random() * 4) + 1;

                if (numbers.find(el => el === number) === undefined) {numbers.push(number)}
                else {i--}
            }
        }

        return numbers;
    }


    if (isOpen === true) {consumindoAPI();}

    function isCorrectOption() {

        option1.parentNode.style.border = "5px solid red";
        option2.parentNode.style.border = "5px solid red";
        option3.parentNode.style.border = "5px solid red";
        option4.parentNode.style.border = "5px solid green";

    }

    return (
    <main className = {styles.container}>

            
        {isOpen === false && <ul className = {styles.list}> 
            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>

            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>
            
            <li className = {styles.listItem} onClick = {() => setIsOpen(!isOpen)}>
                
            </li>
            
            </ul>}

        {isOpen && (

            <div className = {styles.motionDiv}>
                <div className = {styles.mainMotionDiv}>

                    <div className = {styles.containerTituloPergunta}>
                        <div className = {styles.tituloPergunta} id = "tituloPergunta">

                        </div>
                            
                        <div className = {styles.btnBackToHistory}>
                            <button onClick = {() => setIsOpen(!isOpen)}>VOLTAR</button>
                        </div>
                    </div>
                    

                    <div className = {styles.containerOptions}>
                        <div className = {styles.options} onClick = {() => isCorrectOption()}>
                            <p className = {styles.optionsText} id = "option1"></p>
                        </div>

                        <div className = {styles.options} onClick = {() => isCorrectOption()}>
                            <p className = {styles.optionsText} id = "option2"></p>
                        </div>  

                        <div className = {styles.options} onClick = {() => isCorrectOption()}>
                            <p className = {styles.optionsText} id = "option3"></p>
                        </div>

                        <div className = {styles.options} onClick = {() => isCorrectOption()}>
                            <p className = {styles.optionsText} id = "option4"></p>
                        </div>
                    </div>
                </div>
            </div>

        )}

        




    </main>
    );
}

export default MatematicaMain;