import styled from "@emotion/styled";

interface IProps {
    border: number;
    size: number;
    borderColor: string;
    hexColor: string;
}

function Hex({border, size, borderColor, hexColor}: IProps) {


    const This = styled.div`
        margin-left: ${size/2 + (border/2)}px;
        margin-top: ${size/2 + (border/2)}px;
        width: ${size}px;
        height: ${size * 0.58}px;
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
        width: ${size + (border)}px;
        height: ${size + (border)}px;
        border: solid 1px red;
    `
    return (
        <Box>
            <This>
            </This>
        </Box>
    );
}

export default Hex;