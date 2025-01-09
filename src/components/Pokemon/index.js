import './pokemon.css';

export default function Pokemon(){

    const handleDragOver = (event) => {
        event.preventDefault();
    }
    const handleDrop = (event) => {
        const data = event.dataTransfer.getData("text/plain");
        alert("dados recebidos: ", data.tipo);
    }
    return(
        <div className='pokeBox' onDragOver={handleDragOver} onDrop={handleDrop}>
            <div className='fundo'></div>
            <div className='bigCircle'></div>
            <div className='smallCircle'></div>
            <div className='leftLine'></div>
            <div className='rightLine'></div>
        </div>
    )
}