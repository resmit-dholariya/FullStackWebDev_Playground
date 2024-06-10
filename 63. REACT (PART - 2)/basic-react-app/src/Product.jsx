import "./Product.css";

function Product({ title, price = 10000, features }) {
  let isDiscount = price > 30000;
  let styles = {
    backgroundColor: isDiscount ? "pink" : "",
    color: isDiscount ? "black" : "",
  };
  return (
    <div className="Product" style={styles}>
      <h3>{title.toUpperCase()}</h3>
      <h5>Price: {price * 2}</h5>
      {/* {price > 30000 ? <p>Discount of 5%</p> : null} */}
      {isDiscount && <p>Discount of 5%</p>}
      <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p>
    </div>
  );
}

export default Product;
