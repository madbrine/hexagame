import Hex from "./components/Hex";
import useWindowDimensions from "./hooks/useWindowDimensions";
import HexagonsScreen from "./screens/HexagonsScreen";
import SceneRenderer from "./screens/SceneRenderer";

function Main() {
  return (
    <div>
      {/* <HexagonsScreen hexSize={10} hexBorder={5}/> */}
      <SceneRenderer hexSize={20} hexBorder={1}/>
    </div>
  );
}

export default Main;
