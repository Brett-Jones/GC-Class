
import React from "react";
import './card.css';

function Card({title, type, description}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{type}</p>
            <p>{description}</p>
        </div>
    );
}

// const Card = () => {
//     return (
//         <div className="card">
//             <div className="card-title"> Wrath of Nailah</div>
//             <div className="card-img" ></div>
//             <div className="card-type">Instant</div>
//             <div className="card-action">Tap:</div>
//             <div className="card-text">Evoke Wrath: Destroys all Creatures & Lands. NOTHING can survive!!!</div>
//         </div>
//     )
// }

export default Card;







