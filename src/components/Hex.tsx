import styled from "@emotion/styled";
import { useState } from "react";

interface IProps {
    border: number;
    size: number;
    borderColor: string;
    hexColor: string;
}

function Hex({border, size, borderColor, hexColor}: IProps) {

    const [isHexColor, setHexColor] = useState(hexColor);

    const standartPosition = size/2 + border/2;
    const hexEdge = size * 0.58;
    const boxWidth = size + border;
    const boxHeight = hexEdge + hexEdge/2 + border;

    const This = styled.div`
        margin-left: ${standartPosition}px;
        margin-top: ${standartPosition}px;
        width: ${size}px;
        height: ${hexEdge}px;
        position: absolute;
        transform: translate(-50%, -50%);
        border-left: solid ${border}px ${borderColor};
        border-right: solid ${border}px ${borderColor};
        background-color: ${isHexColor};
        &:before,
        &:after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: ${isHexColor};
        }
        &:before {
            transform: rotate(60deg);
            border-left: solid ${border}px ${borderColor};
            border-right: solid ${border}px ${borderColor};
            margin-left: -${border}px;
        }
        &:after {
            transform: rotate(-60deg);
            border-left: solid ${border}px ${borderColor};
            border-right: solid ${border}px ${borderColor};
            margin-left: -${border}px;
        }
    `
    const Box = styled.div`
        width: ${boxWidth}px;
        height: ${boxHeight}px;
        &:hover {
            opacity: 0.8
        }
    `
    return (
        <Box >
            <This>
            </This>
        </Box>
    );
}

export default Hex;