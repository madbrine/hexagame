import { Group, Shape, Text } from "react-konva";
import { IHex } from "../types/IHex";

interface IProps {
    border: number,
    size: number,
    hex: IHex,
    xPosition: number,
    yPosition: number,
}
function BorderShape({
    border,
    size,
    hex,
    xPosition,
    yPosition,
}: IProps) {

    const borderColor = (num: number) => {
        //num === 1 && console.log('asd ' + xPosition + ' ' + yPosition)
        const res =
            num === 1
                ? '#2466d0'
                : '#f2f2f2'
        return res;
    }

    const xp = yPosition % 2 === 0
        ?
        (xPosition * size) + (0.5 * size)
        :
        xPosition * size;
    const yp = size * 0.75 * yPosition;
    return (
        <Group>
            <Shape
                sceneFunc={(ctx, shape) => {
                    ctx.beginPath();
                    ctx.moveTo(
                        xp + size,
                        yp + 0.25 * size
                    );
                    ctx.lineTo(
                        xp + size,
                        yp + 0.75 * size
                    );
                    ctx.closePath();
                    ctx.strokeShape(shape)
                }}
                stroke={borderColor(hex.edges[0])}
                strokeWidth={border}
            />
            <Shape
                sceneFunc={(ctx, shape) => {
                    ctx.beginPath();
                    ctx.moveTo(
                        xp + size,
                        yp + 0.75 * size
                    );
                    ctx.lineTo(
                        xp + 0.5 * size,
                        yp + size
                    );
                    ctx.closePath();
                    ctx.strokeShape(shape)
                }}
                stroke={borderColor(hex.edges[1])}
                strokeWidth={border}
            />
            <Shape
                sceneFunc={(ctx, shape) => {
                    ctx.beginPath();
                    ctx.moveTo(
                        xp + 0.5 * size,
                        yp + size
                    );
                    ctx.lineTo(
                        xp,
                        yp + 0.75 * size
                    );
                    ctx.closePath();
                    ctx.strokeShape(shape)
                }}
                stroke={borderColor(hex.edges[2])}
                strokeWidth={border}
            />
        </Group>
    );
}

export default BorderShape;