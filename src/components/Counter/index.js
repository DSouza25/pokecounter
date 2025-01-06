import "./counter.css";

export default function Counter(props){
    if (props.tipo === "damage") {
        return(
            <div className="counterContainer">
            <   p>{props.valor}</p>
            </div>
        )
    }
    if (props.tipo === "poisoned") {
        return(
            <div className="poisoned">
                <div className="poison"></div>
           </div>
        )
    }
    if (props.tipo === "burned") {
        return(
            <div className="burned">
                <div className="flame"></div>
            </div>
        )
    }
    if (props.tipo === "asleep") {
        return(
            <div className="asleep"></div>
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