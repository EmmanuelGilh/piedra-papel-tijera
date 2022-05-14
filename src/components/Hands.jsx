import React, { Fragment } from 'react';
import styles from '../components/Hands.module.css'
import line from '../media/Line.png'
import choices from '../Constants'
import Results from '../components/Results'


const Hands = ({ yourChoice, pcChoice, setYourChoice, setPcChoice, result }) => {


    //funcion para encontrar la img necesaria dentro del array
    function findChoice(str) {
        if (!str) {
            return ''
        }
        const choiceFound = choices.find(choice => choice.label === str)

        if (!choiceFound) {
            return ''
        }
        return choiceFound.img
    }

    //Cambia el estado de las choices de ambos jugarodes onClick
    const handleClick = (choice) => {
        setYourChoice(choice)
        getPcChoice()
    }

    //Genera un choice random para la Pc
    const getPcChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setPcChoice(randomChoice.label)
    }


    return (
        <div className={styles.flex_container}>
            <div className={styles.user_side}>
                <h2 className={styles.h2}>Tu</h2>
                <h5 className={styles.h5}>Selecciona una opción</h5>
                <div className={styles.user_options}>
                    {choices.map((choice, index) =>
                        <img className={styles.hand_img1} src={choice.img} key={index} onClick={() => handleClick(choice.label)} alt={choice.label} />)}
                </div>
            </div>
            {/* condicional para mostrar las selecciones o el resultado en el campo */}
            {
                !result ? <Fragment>
                    <div className={styles.user_choice}>
                        <img className={styles.user_hand} src={findChoice(yourChoice)} alt={yourChoice} />
                        <h4 className={styles.user_handH} >{yourChoice}</h4>
                    </div>
                    <div className={styles.bar}>
                        <img src={line} alt='line' />
                    </div>
                    <div className={styles.pc_choice}>
                        <img className={styles.pc_hand} src={findChoice(pcChoice)} alt={pcChoice} />
                        <h4 className={styles.user_handH} >{pcChoice}</h4>
                    </div>
                </Fragment> : <Results />
            }
            <div className={styles.pc_side}>
                <h2 className={styles.h2pc}>Computadora</h2>
                <h5 className={styles.h5}> </h5>
                <div className={styles.pc_options}>
                    {choices.map((choice, index) =>
                        <img className={styles.hand_img2} src={choice.img} key={index} alt={choice.label} />)}
                </div>
            </div >
        </div>

    )
}

export default Hands