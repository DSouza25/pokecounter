import "./counter.css";

export default function Counter(props){

    const dragData = {
        tipo: props.tipo,
        valor: props.valor
    }


    const handleDragStart = (event) => {
        const serializedData = JSON.stringify(dragData);
        event.dataTransfer.setData("application/json", serializedData);
    }


    if (props.tipo === "damage") {
        return(
            <div className="counterContainer" draggable="true" onDragStart={handleDragStart}>
            <   p>{props.valor}</p>
            </div>
        )
    }
    if (props.tipo === "poisoned") {
        return(
            <div className="poisoned" draggable="true" onDragStart={handleDragStart}>
                <div className="poison"></div>
           </div>
        )
    }
    if (props.tipo === "burned") {
        return(
            <div className="burned" draggable="true" onDragStart={handleDragStart}>
                <div className="flame"></div>
            </div>
        )
    }
    if (props.tipo === "asleep") {
        return(
            <div className="asleep" draggable="true" onDragStart={handleDragStart}></div>
        )
    }
    if(props.tipo === 'heal'){
        return(
            <div className="heal" draggable="true" onDragStart={handleDragStart}>
                <p>{props.valor}</p>
            </div>
        )
    }
    
}


/*
    counter
        <div className="counterContainer">
            <p>{props.valor}</p>
        </div>
*/

/**
    burned
       <div className="burned">
            <div className="flame"></div>
       </div> 
 */

/**
    Asleep
         <div className="asleep"></div> 
 */