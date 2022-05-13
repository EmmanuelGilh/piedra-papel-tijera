import React, { useState, useEffect } from 'react';
import './App.css';
import RockPaperScissor from './components/RockPaperScissor';



function App() {

  // const [yourChoice, setYourChoice] = useState(null)
  // const [pcChoice, setPcChoice] = useState(null)
  // const [yourPoints, setYourPoints] = useState(0)
  // const [pcPoints, setPcPoints] = useState(0)
  // const [result, setResult] = useState()

  // const choices = ['piedra', 'papel', 'tijera']

  // const handleClick = (choice) => {
  //   setYourChoice(choice)
  //   getPcChoice()
  // }

  // const getPcChoice = () => {
  //   const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  //   setPcChoice(randomChoice)
  // }


  // useEffect(() => {
  //   const getWinner = yourChoice + pcChoice
  //   if (getWinner === 'piedratijera' || getWinner === 'papelpiedra' || getWinner === 'tijerapapel') {
  //     const sumYourPoints = yourPoints + 1
  //     setYourPoints(sumYourPoints)
  //     setResult('Ganaste')
  //   }

  //   if (getWinner === 'papeltijera' || getWinner === 'tijerapiedra' || getWinner === 'piedrapapel') {
  //     const sumPcPoints = pcPoints + 1
  //     setPcPoints(sumPcPoints)
  //     setResult('Perdiste')
  //   }

  //   if (getWinner === 'papelpapel' || getWinner === 'tijeratijera' || getWinner === 'piedrapiedra') {
  //     setResult('Empate')
  //   }
  // }, [yourChoice, pcChoice])

  return (
    <div className="App">
      <RockPaperScissor />

      {/* <div className='score'>
        <h1> {yourPoints}-{pcPoints} </h1>
        <h5>marcador</h5>
      </div> */}
      {/* <div className='user-side'>
        <h2>Tu</h2>
        <h5>Selecciona una opción</h5>
        <div>
          {choices.map((choice, index) =>
            <button className='button' key={index} onClick={() => handleClick(choice)}>
              {choice}
            </button>)}
          <div className='user-choice'>
            <img className='user-hand' alt={yourChoice} />
          </div>
        </div>
      </div> */}
      {/* <div className='pc-side'>
        <h2>Computadora</h2>
      </div> */}
      {/* {choices.map((choice, index) =>
        <span className='img' key={index}>
          {choice}
        </span>)}
      <div className='pc-choice'>
        <img className='pc-hand' alt={pcChoice} />
      </div> */}
      {/* <div className='results'>
        <h1> {result} </h1>
      </div> */}
    </div>
  );
}

export default App;
