import React, { useState, useEffect } from 'react';
import Header from './Header';
import Score from './Score';
import Hands from './Hands';
import Results from './Results';

function RockPaperScissor() {

    const [yourChoice, setYourChoice] = useState('')
    const [pcChoice, setPcChoice] = useState('')
    const [yourPoints, setYourPoints] = useState(0)
    const [pcPoints, setPcPoints] = useState(0)
    const [result, setResult] = useState()
    const [show, setShow] = useState(false)



    return (
        <div>
            <Header />
            <Score yourPoints={yourPoints} pcPoints={pcPoints} yourChoice={yourChoice} pcChoice={pcChoice} setResult={setResult} setYourPoints={setYourPoints} setPcPoints={setPcPoints} />
            <Hands yourChoice={yourChoice} pcChoice={pcChoice} setYourChoice={setYourChoice} setPcChoice={setPcChoice} />
            <Results result={result} />
        </div>
    )
}

export default RockPaperScissor