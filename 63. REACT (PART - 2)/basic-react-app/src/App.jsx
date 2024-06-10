import "./App.css";
import MsgBox from "./MsgBox";
import ProductTab from "./ProductTab";
import Title from "./Title";
// import { Title } from "./Title";

function Description() {
  return <h3>2 * 2 = {2 * 2}</h3>;
}

function App() {
  return (
    <>
      <MsgBox username={"resmitDholariya"} textColor={"yellow"} />
      <ProductTab />
    </> //react fragments
  );
}

export default App;
