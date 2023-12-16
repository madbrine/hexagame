import { Shape } from "react-konva";

interface IProps {
    border: number,
    size: number,
    borderColor: string,
    hexColor: string,
    hexEdge: number,
    xPosition: number,
    yPosition: number,
}
function HexShape({
    border,
    size,
    borderColor,
    hexColor,
    hexEdge,
    xPosition,
    yPosition,
}: IProps) {
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
                context.lineTo(
                    xp + size,
                    yp + 0.25 * size
                );
                context.lineTo(
                    xp + size,
                    yp + 0.75 * size
                );
                context.lineTo(
                    xp + 0.5 * size,
                    yp + size
                );
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
            fill="#00D2FF"
            stroke="gray"
            strokeWidth={border}
        />
    );
}

export default HexShape;