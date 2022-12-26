import styles from "./HistoriaMain.module.css"
import {useState} from "react"

const baseURL = "http://localhost:8082";

var option1,option2,option3,option4, currentID;

function HistoriaMain() {

    const [isOpen,setIsOpen] = useState(false);
    const [correct,setCorrect] = useState();
    const [pontuacao,setPontuacao] = useState(0);

    //Função que consome a API
    function consumindoAPI (id) {
        fetch(`${baseURL}/questions`)
    .then(response => response.json())
    .then(json => setQuestions(json,id))
    .catch(error => console.log(error))
    }

    //Função que atribui as perguntas aos cards
    const setQuestions = (data,id) => {
        
        currentID = id;

        document.querySelector(`#tituloPergunta`).innerHTML = data[id].titulo;

        orderOptions(data[id]);

    }

    //Função que faz o mapeamento das opções
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

    //Função responsável por gerar a ordem em que as opções serão exibidas
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

    //Função que mostra ao usuário se ele acertou a questão e o impossibilita de escolher um card que já foi
    //respondido
    function isCorrectOption(id) {

        option1.parentNode.style.border = "5px solid red";
        option2.parentNode.style.border = "5px solid red";
        option3.parentNode.style.border = "5px solid red";
        option4.parentNode.style.border = "5px solid green";

        document.getElementById(`card${id}`).style.backgroundImage = `url(${require('../../assets/cardRespondido.png')})`;

        document.getElementById(`card${id}`).style.pointerEvents = "none";
        
    }

    return (
    <main className = {styles.container}>

            
        <ul className = {styles.list}> 
            <li id = "card1" className = {styles.listItem} 

            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card1").id.substring(document.getElementById("card1").id.length - 1))}}>
                
            </li>

            <li id = "card2" className = {styles.listItem}  

            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card2").id.substring(document.getElementById("card2").id.length - 1))}}>
                
            </li>

            <li id = "card3" className = {styles.listItem} 

            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card3").id.substring(document.getElementById("card3").id.length - 1))}}>
                
            </li>

            <li id = "card4" className = {styles.listItem}  

            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card4").id.substring(document.getElementById("card4").id.length - 1))}}>
                
            </li>

            <li id = "card5" className = {styles.listItem}  
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card5").id.substring(document.getElementById("card5").id.length - 1))}}>
                
            </li>

            <li id = "card6" className = {styles.listItem}  
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card6").id.substring(document.getElementById("card6").id.length - 1))}}>
                
            </li>

            <li id = "card7" className = {styles.listItem}  
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card7").id.substring(document.getElementById("card7").id.length - 1))}}>
                
            </li>

            <li id = "card8" className = {styles.listItem}  

            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card8").id.substring(document.getElementById("card8").id.length - 1))}}>
                
            </li>

            <li id = "card9" className = {styles.listItem}  
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card9").id.substring(document.getElementById("card9").id.length - 1))}}>
                
            </li>

            <li id = "card10" className = {styles.listItem} 
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card10").id.substring(parseInt(document.getElementById("card10").id.length - 2),parseInt(document.getElementById("card10").id.length)))}}>
                
            </li>

            <li id = "card11" className = {styles.listItem} 
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card11").id.substring(parseInt(document.getElementById("card11").id.length - 2),parseInt(document.getElementById("card11").id.length)))}}>
                
            </li>

            <li id = "card12" className = {styles.listItem} 
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card12").id.substring(parseInt(document.getElementById("card12").id.length - 2),parseInt(document.getElementById("card12").id.length)))}}>
                
            </li>

            <li id = "card13" className = {styles.listItem} 
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card13").id.substring(parseInt(document.getElementById("card13").id.length - 2),parseInt(document.getElementById("card13").id.length)))}}>
                
            </li>

            <li id = "card14" className = {styles.listItem} 
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card14").id.substring(parseInt(document.getElementById("card14").id.length - 2),parseInt(document.getElementById("card14").id.length)))}}>
                
            </li>

            <li id = "card15" className = {styles.listItem} 
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card15").id.substring(parseInt(document.getElementById("card15").id.length - 2),parseInt(document.getElementById("card15").id.length)))}}>
                
            </li>

            <li id = "card16" className = {styles.listItem} 
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card16").id.substring(parseInt(document.getElementById("card16").id.length - 2),parseInt(document.getElementById("card16").id.length)))}}>
                
            </li>

            <li id = "card17" className = {styles.listItem} 
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card17").id.substring(parseInt(document.getElementById("card17").id.length - 2),parseInt(document.getElementById("card17").id.length)))}}>
                
            </li>

            <li id = "card18" className = {styles.listItem} 
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card18").id.substring(parseInt(document.getElementById("card18").id.length - 2),parseInt(document.getElementById("card18").id.length)))}}>
                
            </li>

            <li id = "card19" className = {styles.listItem} 
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card19").id.substring(parseInt(document.getElementById("card19").id.length - 2),parseInt(document.getElementById("card19").id.length)))}}>
                
            </li>
            
            <li id = "card20" className = {styles.listItem} 
            
            onClick = {() => {setIsOpen(!isOpen); 
            consumindoAPI(document.getElementById("card20").id.substring(parseInt(document.getElementById("card20").id.length - 2),parseInt(document.getElementById("card20").id.length)))}}>
                
            </li>
            
            </ul>

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
                        <div className = {styles.options} onClick = {() => {isCorrectOption(currentID)}}>
                            <p className = {styles.optionsText} id = "option1"></p>
                        </div>

                        <div className = {styles.options} onClick = {() => isCorrectOption(currentID)}>
                            <p className = {styles.optionsText} id = "option2"></p>
                        </div>  

                        <div className = {styles.options} onClick = {() => isCorrectOption(currentID)}>
                            <p className = {styles.optionsText} id = "option3"></p>
                        </div>

                        <div className = {styles.options} onClick = {() => isCorrectOption(currentID)}>
                            <p className = {styles.optionsText} id = "option4"></p>
                        </div>
                    </div>
                </div>
            </div>

        )}

        




    </main>
    );
}

export default HistoriaMain;