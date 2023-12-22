import { Group, Shape, Text } from "react-konva";
import { IHex } from "../types/IHex";

interface IProps {
    border: number,
    size: number,
    hex: IHex,
    xPosition: number,
    yPosition: number,
}
function HexShape({
    border,
    size,
    hex,
    xPosition,
    yPosition,
}: IProps) {

    const hexColor =
        hex.hex === 0 ? '#FFFFFF'
            :
            hex.hex === 1 ? '#0e387cf'
                :
                hex.hex === 2 ? '#2165d1f'
                    :
                    hex.hex === 3 ? '#488941f'
                        :
                        '#383838'

    const xp = yPosition % 2 === 0
        ?
        (xPosition * size) + (0.5 * size)
        :
        xPosition * size;
    const yp = size * 0.75 * yPosition;
    return (
        <Shape
            sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(
                    xp,
                    yp + 0.25 * size
                );
                context.lineTo(
                    xp + 0.5 * size,
                    yp
                );
                //00
                context.lineTo(
                    xp + size,
                    yp + 0.25 * size
                );
                //11
                context.lineTo(
                    xp + size,
                    yp + 0.75 * size
                );
                //22
                context.lineTo(
                    xp + 0.5 * size,
                    yp + size
                );
                //33
                context.lineTo(
                    xp,
                    yp + 0.75 * size
                );
                context.lineTo(
                    xp,
                    yp + 0.25 * size
                );
                context.closePath();
                // (!) Konva specific method, it is very important
                context.fillStrokeShape(shape);
            }}
            fill={hexColor && hexColor}
            strokeWidth={border}
        />
    );
}

export default HexShape;