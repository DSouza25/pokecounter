import { useState } from 'react';
import './pokemon.css';

export default function Pokemon(){
    const [ data, setDroppedData] = useState(null);
    const [dano, setDano] = useState(0);
    const [displayOn, setDisplayOn] = useState(false);

    const handleDragOver = (event) => {
        event.preventDefault();
    }
    const handleDrop = (event) => {
        event.preventDefault();
        const dados =JSON.parse(event.dataTransfer.getData("application/json"));
        setDroppedData(dados);
        let soma = dano + dados.valor;
        if(soma <0){
            soma = 0;
        }
        setDano(soma);
        if (soma > 0) {
            setDisplayOn(true);
        }else{
            setDisplayOn(false);
        }
    }
    return(
        <div className='pokeBox' onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className='fundo'></div>
            <div className='bigCircle'></div>
            <div className='smallCircle'></div>
            <div className='leftLine'></div>
            <div className='rightLine'></div>
            <p className='damage'>{displayOn?dano:''}</p>
        </div>
    )
}