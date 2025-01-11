import { useState } from 'react';
import './pokemon.css';

export default function Pokemon(){
    const [ data, setDroppedData] = useState(null);
    const [dano, setDano] = useState(0);

    const handleDragOver = (event) => {
        event.preventDefault();
    }
    const handleDrop = (event) => {
        event.preventDefault();
        const dados =JSON.parse(event.dataTransfer.getData("application/json"));
        setDroppedData(dados);
        const soma = dano + dados.valor;
        setDano(soma);
    }
    return(
        <div className='pokeBox' onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className='fundo'></div>
            <div className='bigCircle'></div>
            <div className='smallCircle'>{dano}</div>
            <div className='leftLine'></div>
            <div className='rightLine'></div>
        </div>
    )
}