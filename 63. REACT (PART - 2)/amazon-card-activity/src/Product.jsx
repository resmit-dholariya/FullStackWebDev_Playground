import Price from "./Price";
import "./Product.css";

export default function ({ title, idx }) {
  const oldPrices = ["12,495", "11,900", "1,599", "599"];
  const newPrices = ["8,999", "9,199", "899", "278"];
  const description = [
    ["8,000 DPI", "5 Programmable Buttons"],
    ["Intutitive Surface", "Designed for ipad Pro"],
    ["Designed for ipad Pro", "Intuitive Surface"],
    ["Wireless", "Optical Orientation"],
  ];
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}
