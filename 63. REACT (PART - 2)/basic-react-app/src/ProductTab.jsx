import Product from "./Product";

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"];
  return (
    <>
      <Product title={"smartphone"} price={40000} features={options} />
      <Product title={"laptop"} price={50000} features={options} />
      <Product title={"touchpen"} features={options} />
    </>
  );
}

export default ProductTab;
