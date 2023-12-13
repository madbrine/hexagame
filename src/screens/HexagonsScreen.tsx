import Hex from "../components/Hex";

interface IProps {
    width: number;
    height: number;
}
function HexagonsScreen({ width, height }: IProps) {

    const arrWidth = Array.from({ length: width }, (_, i) => i);
    const arrHeight = Array.from({ length: height }, (_, i) => i);

    const hexSize = 50;
    const hexBorder = 6;

    console.log(arrWidth);
    console.log(arrHeight)
    return (
        <div>
            {arrHeight.map((_, i) => {
                return (
                    <div style={{ display: 'flex', marginLeft: i%2 === 0 ? (hexSize+hexBorder)/2 : 0}} key={`w${i}`}>
                        {arrWidth.map((_, j) => {
                            return (
                                <Hex border={hexBorder} size={hexSize} borderColor={"gray"} hexColor={"white"} key={`w${i}h${j}`} />
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