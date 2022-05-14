import React, { useEffect } from 'react';
import styles from '../components/Score.module.css'


const Score = ({ yourPoints, pcPoints, yourChoice, pcChoice, setResult, setYourPoints, setPcPoints }) => {

    //useEffect para decidir ganador, setear en el marcador y quitarlo para otra jugada
    useEffect(() => {
        if (!yourChoice || !pcChoice) {
            return
        }
        setTimeout(() => {
            const getWinner = yourChoice + pcChoice
            if (getWinner === 'PiedraTijera' || getWinner === 'PapelPiedra' || getWinner === 'TijeraPapel') {
                setYourPoints(prevValue => prevValue + 1)
                setResult('Ganaste')
            }

            if (getWinner === 'PapelTijera' || getWinner === 'TijeraPiedra' || getWinner === 'PiedraPapel') {
                setPcPoints(prevValue => prevValue + 1)
                setResult('Perdiste')
            }

            if (getWinner === 'PapelPapel' || getWinner === 'TijeraTijera' || getWinner === 'PiedraPiedra') {
                setResult('Empate')
            }
        }, 1500)
    }, [yourChoice, pcChoice, setResult, setYourPoints, setPcPoints])

    return (
        <div className={styles.score_points}>
            <h1 className={styles.points}> {yourPoints}-{pcPoints} </h1>
            <h5 className={styles.marcador}>marcador</h5>
        </div>
    )
}

export default Score