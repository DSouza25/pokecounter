import { useState } from 'react';
import './coin.css';

export default function Coin(){
    const [cara, setCara] = useState(true);

    function flip(){
        let coin = document.querySelector(".coin");
        let random = Math.floor((Math.random()*10) + 1);
        coin.classList.add("flipNormal");
        setTimeout(()=>{
            coin.classList.remove("flipNormal");
        }, 1000);
        if(random%2 ==0){
            setCara(false);
        }else{
            setCara(true);
        }
    }
    return(
        <div className='coinContainer'>
            <div className='coin' onClick={flip}>
                {cara?
                    <div className='front'></div>:
                    <div className='back'></div>
                }
            </div>
        </div>
    )
}
