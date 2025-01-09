import { useState } from 'react';
import './vastro.css';

export default function Vastro(){
    const[active, setActive] = useState(true);

    function changeStatus(){
        setActive(!active);
    }


    return(
        <>
            {active?
            <div onClick={changeStatus} className='astroMark'></div> :
            <div onClick={changeStatus} className='disable'></div>
            }
        </>
    )
}