
import HTMLFlipBook from "react-pageflip";

import "./Blog.css"

import useSound from "use-sound";
import swipe_sfx from "../assets/paper_swipe.mp3"

const pages = [
    <div className="page" key="page_1">
        <h1 className="anchor">BREAKING ANCHOR NEWS!</h1>
        <div className="divider"></div>
        <><p>All about Anchor and her totaly real newspaper. This Page was last printed at <b>09/07/2026</b></p></>
        <div className="divider"></div>

        <h1 className="title">MY FIRST BLOG :O</h1>

        <h2>What's Anchor News?</h2>
        <p>It's My Blog post in a more unique format, I really wanted to do something unique that would encourage Me
            to improve my coding skill (i.e web animations, sfx, etc) in React. 
            This newspaper format is inspired by nomnomnami's neocities template!
        </p>

        <br></br>

        <p style={{width: '100%', textAlign: 'center', backgroundColor: 'rgb(48, 46, 46)', color: 'white'}}>I'll be posting my projects and archiving in this blog, so stay tuned!</p>

        <div className="row">
            <div className="collumn">
            <h2>All about Anchor</h2>
            <p>"Hallow! I'm Anchor, my sona is a vampire and I'm an artist and a Computer Science undergraduate!"</p>
            </div>
            <div className="collumn">
            <h2>How did I make these?</h2>
            <p>I used Figma for planning (But You could just use a pen and paper to sketch the outline), React & VS for coding, and ZapSplat to find sound effects.</p>
            </div>
        </div>

        <h2>Honest Scoop</h2>
        <p>What do people usualy post on their first blog? I'm trying to fill up this page as much as possible..
            I also like boardgames and dungeons & dragons, My character is called Bingle Bart he's a redditor dragonborn paladin.
            I'm planning to create a boardgame side project too.
        </p>
    </div>,

    <div className="page" key="page_2">
        <h1 className="anchor">BREAKING ANCHOR NEWS!</h1>
        <div className="divider"></div>
        <><p>Article under construction.. This Page was last printed <b>00/00/0000</b></p></>
        <div className="divider"></div>

        <h1 className="title">TO BE CONTINUED..</h1>
    </div>,

    <div className="page" key="page_3">
        <h1 className="anchor">BREAKING ANCHOR NEWS!</h1>
        <div className="divider"></div>
        <><p>Article under construction.. This Page was last printed <b>00/00/0000</b></p></>
        <div className="divider"></div>

        <h1 className="title">TO BE CONTINUED..</h1>
    </div>,

    <div className="page" key="page_4">
        <h1 className="anchor">BREAKING ANCHOR NEWS!</h1>
        <div className="divider"></div>
        <><p>Article under construction.. This Page was last printed <b>00/00/0000</b></p></>
        <div className="divider"></div>

        <h1 className="title">TO BE CONTINUED..</h1>
    </div>
];

function Blog(){
    // Sound Effects
    const [play] = useSound(swipe_sfx, { interrupt: true });

    return (
        <div id="Blog">
            <h3>Click Left or Right Side to flip pages!</h3>
            <br></br>

            <HTMLFlipBook 
            width={570}
            height={700}
            drawShadow={false}
            showPageCorners={false}
            flippingTime={500}
            onFlip={() => play()}>
                {pages}
            </HTMLFlipBook>
        </div>
    );
}

export default Blog;