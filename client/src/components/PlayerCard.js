import React from "react";

const PlayerCard = (props) => {


    return (
        <section>
            <div>
                <h2>{props.player.name}</h2>
                <p>Country: {props.player.country}</p>
                <p># of Google Searches: {props.player.searches}</p>
            </div>
       </section> 
    );
}

export default PlayerCard;