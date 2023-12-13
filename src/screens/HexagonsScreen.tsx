import { useEffect, useState } from "react";
import Hex from "../components/Hex";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface IProps {
    hexSize: number;
    hexBorder: number;
}
function HexagonsScreen({ hexSize, hexBorder }: IProps) {

    const {windowWidth, windowHeight} = useWindowDimensions();

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const arrWidth = Array.from({ length: width }, (_, i) => i);
    const arrHeight = Array.from({ length: height }, (_, i) => i);

    const standartPosition = (hexSize + hexBorder) / 2;
    const hexEdge = hexSize/(Math.sqrt(3));
    const boxWidth = hexSize + hexBorder;
    const boxHeight = hexEdge + (hexEdge/2) - 0.3 + hexBorder

    useEffect(()=> {
        setWidth(Math.floor((windowWidth-24)/boxWidth));
        setHeight(Math.floor((windowHeight-24)/boxHeight));
    }, [windowWidth, windowHeight]);

    useEffect(()=> {
        console.log(arrWidth);
    }, [width, height])

    return (
        <div>
            {arrHeight.map((_, i) => {
                return (
                    <div style={{ display: 'flex', marginLeft: i % 2 === 0 ? (hexSize + hexBorder) / 2 : 0 }} key={`w${i}`}>
                        {arrWidth.map((_, j) => {
                            return (
                                <Hex
                                    border={hexBorder}
                                    size={hexSize}
                                    borderColor={"gray"}
                                    hexColor={"white"}
                                    standartPosition={standartPosition}
                                    hexEdge={hexEdge}
                                    boxWidth={boxWidth}
                                    boxHeight={boxHeight}
                                    x={j}
                                    y={i}

                                    key={`w${i}h${j}`}
                                />
                            )
                        })
                        }
                    </div>
                )
            })
            }
        </div>
        // <Hex border={6} size={50} borderColor={"gray"} hexColor={"white"}/>
    );
}

export default HexagonsScreen;