import Hex from "./components/Hex";
import useWindowDimensions from "./hooks/useWindowDimensions";
import HexagonsScreen from "./screens/HexagonsScreen";

function Main() {
  return (
    <div style={{position: 'absolute', padding: 12}}>
      <HexagonsScreen hexSize={50} hexBorder={5}/>
    </div>
  );
}

export default Main;
