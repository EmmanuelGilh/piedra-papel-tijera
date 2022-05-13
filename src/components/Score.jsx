import React, { useState, useEffect } from 'react';



const Score = ({ yourPoints, pcPoints, yourChoice, pcChoice, setResult, setYourPoints, setPcPoints }) => {


    useEffect(() => {
        const getWinner = yourChoice + pcChoice
        if (getWinner === 'piedratijera' || getWinner === 'papelpiedra' || getWinner === 'tijerapapel') {
            const sumYourPoints = yourPoints + 1
            setYourPoints(sumYourPoints)
            setResult('Ganaste')
        }

        if (getWinner === 'papeltijera' || getWinner === 'tijerapiedra' || getWinner === 'piedrapapel') {
            const sumPcPoints = pcPoints + 1
            setPcPoints(sumPcPoints)
            setResult('Perdiste')
        }

        if (getWinner === 'papelpapel' || getWinner === 'tijeratijera' || getWinner === 'piedrapiedra') {
            setResult('Empate')
        }
    }, [yourChoice, pcChoice])

    return (
        <div className='score-points'>
            <h1> {yourPoints}-{pcPoints} </h1>
            <h5>marcador</h5>
        </div>
    )
}

export default Score