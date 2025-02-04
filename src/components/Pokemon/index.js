import { useState } from 'react';
import './pokemon.css';

export default function Pokemon(){
    const [ data, setDroppedData] = useState(null);
    const [dano, setDano] = useState(0);
    const [displayOn, setDisplayOn] = useState(false);
    const [poisoned, setPoisoned] = useState(false);
    const [burned, setBurned] = useState(false);
    const [asleep, setAsleep] = useState(false);

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
        if (dados.tipo === "poisoned") {
            setPoisoned(!poisoned);
        }
        if (dados.tipo === "burned") {
            setBurned(!burned);
        }
        if (dados.tipo === "asleep") {
            setAsleep(!asleep);
        }
    }
    return(
        <div className='pokeBox' onTouchEnd={handleDragOver} onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className='fundo'></div>
            <div className='bigCircle'></div>
            <div className='smallCircle'></div>
            <div className='leftLine'></div>
            <div className='rightLine'></div>
            <p className='damage'>{displayOn?dano:''}</p>
            {burned?<div className='burnedBox'>
                <div className='burnedBackground'></div>
                <div className='burnedEffect'></div>
            </div>:''}
            {poisoned?<div class="poisonBox">
                <div className='poisonEffect'></div>
                <div className='bubbles'></div>
                <div className='bubbles'></div>
                <div className='bubbles'></div>
                <div className='bubbles'></div>
                <div className='bubbles'></div>
                <div className='bubbles'></div>
                <div className='bubbles'></div>
                <div className='bubbles'></div>
                <div className='bubbles'></div>
                <div className='bubbles'></div>
            </div>:''}
            {asleep?<div className='asleepEffect'>
                <p className='zzZ'>Z</p>
                <p className='zzZ'>Z</p>
                <p className='zzZ'>Z</p>
            </div>:''}
        </div>
    )
}