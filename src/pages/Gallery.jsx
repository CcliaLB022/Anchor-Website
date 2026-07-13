import { useState } from "react";
import "./Gallery.css"

import Photo from "./Photos";

const Art = [{src: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Kim-Kitsuragi.Disco-Elysium.webp", date:"00/00/0000"},
            {src: "https://vignette.wikia.nocookie.net/disco-elysium/images/7/77/Kim-kitsuragi.jpg/revision/latest/scale-to-width-down/2000?cb=20191217202813", date:"00/00/0000"},
            {src: "https://preview.redd.it/n5gt6p1p0u441.jpg?width=1080&crop=smart&auto=webp&s=f9c2d1ca29f029f5d724055402740ee878069a97", date:"00/00/0000"}
];

function Gallery(){
    const [centerIndex, setCenterIndex] = useState(0);

    function wrap(i){
        return (i + Art.length) % Art.length;
    }

    function goNext(){
        setCenterIndex((prev) => wrap(prev + 1));
    }
    function goPrev(){
        setCenterIndex((prev) => wrap(prev - 1));
    }
    function popUp(){

    }

    function getStageClass(offset){
        if (offset === 0) return "stage_middle";
        if (offset === -1) return "stage_left";
        if (offset === 1) return "stage_right";
        return "stage_hidden";
    }

    return (
        <div id="Gallery">
            {Art.map((art, i) => {
                // shortest signed distance from centerIndex, wrapping around
                let offset = i - centerIndex;
                if (offset > Art.length / 2) offset -= Art.length;
                if (offset < -Art.length / 2) offset += Art.length;

                return (
                    <Photo
                        key={art.src}
                        date={art.date}
                        className={getStageClass(offset)}
                        onClick={offset <= 0 ? goNext : goPrev}
                    >
                        <img src={art.src} alt={art.date} />
                    </Photo>
                );
            })}
        </div>
    );
}

export default Gallery;