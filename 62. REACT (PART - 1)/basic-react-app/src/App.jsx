import "./App.css";
import ProductTab from "./ProductTab";
import Title from "./Title";
// import { Title } from "./Title";

function Description() {
  return <h3>2 * 2 = {2 * 2}</h3>;
}

function App() {
  return (
    <>
      <ProductTab />
    </> //react fragments
  );
}

export default App;
