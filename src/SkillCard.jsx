import "./SkillCard.css"

import useSound from "use-sound";
import sfx from "./assets/blip.mp3"

function SkillCard({text, bg_color, t_color, children}){
    const [play] = useSound(sfx, {volume: 0.2, interrupt: true });

    return(
        <div className="skill_card" 
            style={{backgroundColor: bg_color,
                    color: t_color == 1 ? "black" : "white"}}
            onMouseEnter={play}
        >
            {children}
            <p>{text}</p>
        </div>
    );
}

export default SkillCard;