import Product from "./Product";
import "./ProductTab.css";

export default function ProductTab() {
  const Titles = [
    "Logitech MX Master",
    "Apple Pencil (2nd Gen)",
    "Zebronics Zeb-transformer",
    "Portronics Toad 23",
  ];
  return (
    <div className="ProductTab">
      <Product idx="0" title={Titles[0]} />
      <Product idx="1" title={Titles[1]} />
      <Product idx="2" title={Titles[2]} />
      <Product idx="3" title={Titles[3]} />
    </div>
  );
}
