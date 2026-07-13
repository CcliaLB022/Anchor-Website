import { useState } from "react";
import "./Photos.css"

import useSound from "use-sound";
import swipe_sfx from "../assets/card_swipe.mp3"

function Photo({children, date, className, onClick}){
    const [play] = useSound(swipe_sfx, { interrupt: true });

    return (
        <div id="Photo" className={className} onClick={() => {onClick(); play();}}>
            {children}
            <p>{date}</p>
        </div>
    );
}

export default Photo;