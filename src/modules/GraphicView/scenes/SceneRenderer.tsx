import { Layer, Shape, Stage, Text } from "react-konva";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import HexShape from "../shapes/HexShape";

interface IProps {
    hexWidth: number,
    hexBorder: number,
    arrWidth: number[],
    arrHeight: number[]
}
function SceneRenderer({ 
    hexWidth, 
    hexBorder,
    arrWidth,
    arrHeight
}: IProps) {

    const hexEdge = hexWidth / (Math.sqrt(3));
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {arrHeight.map((_, y) => {
                    return (arrWidth.map((_, x) => {
                        return (
                            <>
                                <HexShape
                                    border={hexBorder}
                                    size={hexWidth}
                                    borderColor={"gray"}
                                    hexColor={"white"}
                                    hexEdge={hexEdge}
                                    xPosition={x}
                                    yPosition={y}

                                    key={`w${x}h${y}`}
                                />
                            </>
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