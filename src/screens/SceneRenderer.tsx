import { Layer, Shape, Stage } from "react-konva";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import HexShape from "../components/HexShape";

interface IProps {
    hexSize: number,
    hexBorder: number
}
function SceneRenderer({hexSize, hexBorder}: IProps) {
    const {windowWidth, windowHeight} = useWindowDimensions();

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const arrWidth = Array.from({ length: width }, (_, i) => i);
    const arrHeight = Array.from({ length: height }, (_, i) => i);

    const standartPosition = (hexSize + hexBorder) / 2;
    const hexEdge = hexSize/(Math.sqrt(3));
    const boxWidth = hexSize
    const boxHeight = hexSize * 0.75

    useEffect(()=> {
        setWidth(Math.floor((windowWidth-24)/boxWidth));
        setHeight(Math.floor((windowHeight-24)/boxHeight));
    }, [windowWidth, windowHeight]);

    useEffect(()=> {
        console.log(arrWidth);
    }, [width, height])

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
            {arrHeight.map((_, y) => {
                return (arrWidth.map((_, x) => {
                            return (
                                <HexShape
                                    border={hexBorder}
                                    size={hexSize}
                                    borderColor={"gray"}
                                    hexColor={"white"}
                                    hexEdge={hexEdge}
                                    xPosition={x}
                                    yPosition={y}

                                    key={`w${x}h${y}`}
                                />
                            )
                        })
                        
                    
                )
            })
            }
            </Layer>
        </Stage>
    );
}

export default SceneRenderer;