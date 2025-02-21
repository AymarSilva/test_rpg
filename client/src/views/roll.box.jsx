import React from 'react';
import { getImage } from '../functions/getImage.dice';
import { getNumberRolled } from '../functions/getNumberRolled.dice';
import { fetchMessage } from '../functions/fetchMessage.backend';
import { getResposta } from '../functions/getResposta.backend';

const RollBox = ({ dado, setNum, setMsg, setFinal }) => {
    async function rolarDado() {
        const numero = getNumberRolled(dado);
        setNum(numero);
        alert(numero);
        await setMsg(fetchMessage(dado, numero));
        setFinal(getResposta(dado, numero));
    };

    return (
        <section className="d-flex justify-content-center align-items-center p-5 rounded-3">
            <div className="text-center p-4 bg-light rounded shadow-lg">

                <div className="mb-2 d-flex flex-column">
                    <img
                        src={getImage(dado)}
                        alt={`Dado ${dado}`}
                        className="img-fluid"
                        style={{ maxWidth: '150px' }}
                    />
                    <span className="h4 text-black">{`D${dado <= 6 ? '06' : dado}`}</span>
                </div>

                <div
                    onClick={() => rolarDado()}
                    className="mt-3 btn btn-warning text-dark fw-bold py-2 px-4 rounded"
                    style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                >
                    Jogar
                </div>
            </div>
        </section>
    );
}

export default RollBox;
