import Hex from "./components/Hex";
import useWindowDimensions from "./hooks/useWindowDimensions";
import HexagonsScreen from "./screens/HexagonsScreen";
import SceneRenderer from "./screens/SceneRenderer";

function Main() {
  return (
    <div style={{position: 'absolute'}}>
      {/* <HexagonsScreen hexSize={50} hexBorder={5}/> */}
      <SceneRenderer hexSize={50} hexBorder={5}/>
    </div>
  );
}

export default Main;
