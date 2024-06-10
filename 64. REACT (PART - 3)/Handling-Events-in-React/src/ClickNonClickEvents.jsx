function handleClick() {
  console.log("Hello!");
}

function handleMouseHover() {
  console.log("Bye!");
}

function handleDoubleClick() {
  console.log("Double Clicked!");
}

export default function ClickNonClickEvents() {
  return (
    <>
      <button onClick={handleClick}>Click me to print Hello!</button>
      <p onMouseOver={handleMouseHover}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quibusdam
        qui exercitationem, excepturi architecto ad nobis placeat nulla corrupti
        hic reiciendis in, officiis omnis explicabo nesciunt eius maiores saepe
        eveniet.
      </p>
      <button onDoubleClick={handleDoubleClick}>Double Click me!</button>
    </>
  );
}
