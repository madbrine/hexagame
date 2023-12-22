import { Group, Layer, Shape, Stage, Text } from "react-konva";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import HexShape from "../shapes/HexShape";
import { IHex } from "../types/IHex";
import BorderShape from "../shapes/BorderShape";

interface IProps {
    hexWidth: number,
    hexBorder: number,
    worldData: IHex[][]
}
function SceneRenderer({
    hexWidth,
    hexBorder,
    worldData
}: IProps) {

    const [world, setWorld] = useState<IHex[][]>(worldData)

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                {
                    world.map((hexRow: IHex[], y: number) => {

                        return (
                            <Group key={`lsd${y}`}>
                                {hexRow.map((hex, x) => {
                                    return (
                                        <>
                                            <HexShape
                                                border={hexBorder}
                                                size={hexWidth}
                                                hex={hex}
                                                xPosition={x}
                                                yPosition={y}

                                                key={`w${x}h${y}`}
                                            />
                                        </>
                                    )
                                })
                                }
                            </Group>
                        )

                    })
                }
            </Layer>
            <Layer>
                {
                    world.map((hexRow: IHex[], y: number) => {

                        return (
                            <Group key={`ddd${y}`}>
                                {hexRow.map((hex, x) => {
                                    return (
                                            <BorderShape
                                                border={hexBorder}
                                                size={hexWidth}
                                                hex={hex}
                                                xPosition={x}
                                                yPosition={y}

                                                key={`sw${x}h${y}`}
                                            />
                                    )
                                })
                                }
                            </Group>
                        )

                    })
                }
            </Layer>
        </Stage>
    );
}

export default SceneRenderer;