import React from 'react';

const ChooseDiceBox = ({ dado }) => {

    async function escolherDado(numLados) {
        await dado(numLados);
    };

    return (
        <ol className="list-unstyled d-flex flex-row flex-md-column align-items-center justify-content-center col-12 col-md-auto">
            <li
                onClick={() => escolherDado(20)}
                className="bg-warning text-dark p-3 mb-2 rounded shadow-sm cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg font-weight-bold"
                style={{ cursor: 'pointer', fontWeight: 'bold' }}
            >
                D20
            </li>
            <li
                onClick={() => escolherDado(12)}
                className="bg-warning text-dark p-3 mb-2 rounded shadow-sm cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg font-weight-bold"
                style={{ cursor: 'pointer', fontWeight: 'bold' }}
            >
                D12
            </li>
            <li
                onClick={() => escolherDado(6)}
                className="bg-warning text-dark p-3 mb-2 rounded shadow-sm cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg font-weight-bold"
                style={{ cursor: 'pointer', fontWeight: 'bold'}}
            >
                D06
            </li>
        </ol>
    );
}

export default ChooseDiceBox;
