import React, { useState } from 'react';
import ChooseDiceBox from './chooseDice.box';
import ResultBox from './result.box';
import RollBox from './roll.box';
import '../App.css'

const Main = () => {
    const [Dice, setDice] = useState(null);
    const [numSelected, setNumSelected] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    const [final, setFinal] = useState(null);

    return (
        <main className="col-12 d-flex flex-column flex-md-row justify-content-between px-4"
            style={{ backgroundColor: `hsl(270, 50%, 20%)` }}>
            <>
                <ChooseDiceBox dado={setDice}/>
                <RollBox dado={Dice} setNum={setNumSelected} setMsg={setMensagem} setFinal={setFinal}/>
                <ResultBox dado={Dice} numSelected={numSelected} mensagem={mensagem} final={final}/>
            </>
        </main>
    );
}

export default Main;
