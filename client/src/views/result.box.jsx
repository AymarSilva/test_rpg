import React from 'react';

const ResultBox = ({ dado, numSelected, mensagem, final }) => {
    return (
        <section
        className="d-flex flex-column align-items-center justify-content-center bg-dark text-white p-4 rounded shadow mx- col-12 col-md-6"
        style={{
            backgroundColor: 'hsl(270, 50%, 40%)',
            height: 'auto',
            minWidth: '40%',
            maxWidth: '100%', 
            overflowY: 'scroll',
            overflowX: 'hidden',
        }}
        >
            <span className="d-block text-center mb-2">{`D${dado} - Número sorteado: ${numSelected}`}</span>
            <span className='h5'>Final: {final === 1 ? 'Bom' : 'Ruim'}</span>
            <p className="text-center">{mensagem}</p>
        </section>
    );
}

export default ResultBox;
