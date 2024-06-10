export default function Price({ oldPrice, newPrice }) {
  const style = {
    backgroundColor: "#e0c367",
    height: "30px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={style}>
      <span style={{ textDecorationLine: "line-through" }}>{oldPrice}</span>
      &nbsp;&nbsp;
      <span style={{ fontWeight: "bold" }}>{newPrice}</span>
    </div>
  );
}
