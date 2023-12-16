import { useEffect, useState } from "react";
import SceneRenderer from "../modules/GraphicView/scenes/SceneRenderer";
import useWindowDimensions from "../hooks/useWindowDimensions";

function GameScreen() {

    const { windowWidth, windowHeight } = useWindowDimensions();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const hexWidth = 11;
    const hexHeight = hexWidth * 0.75

    const arrWidth = Array.from({ length: width }, (_, i) => i);
    const arrHeight = Array.from({ length: height }, (_, i) => i);

    const whatsHex = (e: any) => {
        const x = e.pageX / hexWidth;
        const y = Math.floor(e.pageY / hexHeight - 0.125);
        console.log('----')
        console.log(`x: ${
            y % 2 !== 0 
                ? Math.floor(x)
                : Math.floor(x - 0.5)
        }`)
        console.log(`h: ${y}`)
        
    }

    useEffect(() => {
        setWidth(Math.floor(windowWidth / hexWidth));
        setHeight(Math.floor(windowHeight / hexHeight));
    }, [windowWidth, windowHeight, hexWidth]);

    return (
        <div onClick={(e)=>{whatsHex(e)}}>
            <SceneRenderer 
                hexWidth={hexWidth} 
                hexBorder={1}
                arrWidth={arrWidth}
                arrHeight={arrHeight}
            />
        </div>
    );
}

export default GameScreen;