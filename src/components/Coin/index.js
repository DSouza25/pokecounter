import { useState } from 'react';
import './coin.css';

export default function Coin(){
    const[status, setStatus] = useState(1);
    const[nrandom, setNrandom] = useState(0)

    
    function flip(){
        let coin = document.querySelector(".coin");
        let random = Math.floor(Math.random()*11);
        setNrandom(random);
        if(random%2==0){
            if(status == 1){
                coin.classList.remove("flipNormal");
                coin.classList.add("flipChange");
            }else{
                coin.classList.remove("flipChange");
                coin.classList.add("flipNormal");
            }
            setStatus(2);
        }else{
            if(status == 2){
                coin.classList.remove("flipNormal");
                coin.classList.add("flipChange");
            }else{
                coin.classList.remove("flipChange");
                coin.classList.add("flipNormal");
            }
            setStatus(1);
        }
    }

    return(
        <div className='coinContainer'>
            <p style={{color: 'white'}}>{status}  {nrandom}</p>
            <div className='coin' onClick={flip}>
                <div className='front'></div>
                <div className='back'></div>
            </div>
        </div>
    )
}