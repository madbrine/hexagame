import styled from "@emotion/styled";
import { useState } from "react";

interface IProps {
    border: number,
    size: number,
    borderColor: string,
    hexColor: string,
    standartPosition: number,
    hexEdge: number,
    boxWidth: number,
    boxHeight: number,
    x: number,
    y: number,
}

function Hex({
    border,
    size,
    borderColor,
    hexColor,
    standartPosition,
    hexEdge,
    boxWidth,
    boxHeight,
    x,
    y
}: IProps) {

    const This = styled.div`
        margin-left: ${standartPosition}px;
        margin-top: ${standartPosition}px;
        width: ${size}px;
        height: ${hexEdge}px;
        position: absolute;
        transform: translate(-50%, -50%);
        border-left: solid ${border}px ${borderColor};
        border-right: solid ${border}px ${borderColor};
        background-color: ${hexColor};
        &:before,
        &:after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: ${hexColor};
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
        color: red;
        &:hover {
            opacity: 0.8
        }
    `
    return (
        <Box>
        <div style={{zIndex: 1, position: 'absolute', marginTop: size/3}}>
        x:{x}
        </div>
        <div style={{zIndex: 1, position: 'absolute', marginTop: size/1.5}}>
        y:{y}
        </div>
            <This>
            </This>
        </Box>
    );
}

export default Hex;