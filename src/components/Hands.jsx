import React, { useState, useEffect } from 'react';


const Hands = ({ yourChoice, pcChoice, setYourChoice, setPcChoice }) => {

    const choices = ['piedra', 'papel', 'tijera']

    const handleClick = (choice) => {
        setYourChoice(choice)
        getPcChoice()
    }

    const getPcChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setPcChoice(randomChoice)
    }

    return (
        <div>
            <div className='user-side'>
                <h2>Tu</h2>
                <h5>Selecciona una opción</h5>
                <div>
                    {choices.map((choice, index) =>
                        <img className='hand-img' src={`../../media/${choices}`} key={index} onClick={() => handleClick(choice)} alt={choice} />)}
                    <div className='user-choice'>
                        <img className='user-hand' src={`../../media/${yourChoice}.png`} alt={yourChoice} />
                    </div>
                </div>
            </div>
            <div className='pc-side'>
                <h2>Computadora</h2>
            </div>
            <div>
                {choices.map((choice, index) =>
                    <img className='hand-img' src={`../../media/${choices}`} key={index} alt={choice} />)}
            </div>
            <div className='pc-choice'>
                <img className='pc-hand' src={`../../media/${pcChoice}.png`} alt={pcChoice} />
            </div>
        </div>
    )
}

export default Hands