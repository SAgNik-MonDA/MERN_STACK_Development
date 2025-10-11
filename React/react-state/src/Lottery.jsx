import {useState} from "react";
import {genTicket,sum} from "./helper(Lottery)";
import Ticket from "./Ticket";


export default function Lattery({n=3,winningSum=15}){
    let [ticket,setTicket] = useState(genTicket(n));

    let isWinning = sum (ticket) === winningSum;

        let buyTicket=()=>{
            setTicket(genTicket(n));
        };

    return (
        <div>
            <h1>Lottery Game !</h1>
            <Ticket ticket={ticket}/>
            
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations , you won !!"}</h3>

        </div>
    );
}