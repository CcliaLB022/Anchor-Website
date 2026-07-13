import "./Header.css"
import {Link} from "react-router-dom";

import useSound from "use-sound";
import sfx from "./assets/click.mp3"

function Header(){
    const [play] = useSound(sfx, { interrupt: true });

    return(
        <header>
            <Link to="/Anchor-Website" className="nav-link" onClick={play}>Home</Link>
            <Link to="/Gallery" className="nav-link" onClick={play}>Gallery</Link>
            <Link to="/Blog" className="nav-link" onClick={play}>Blog</Link>
        </header>
    );
}

export default Header