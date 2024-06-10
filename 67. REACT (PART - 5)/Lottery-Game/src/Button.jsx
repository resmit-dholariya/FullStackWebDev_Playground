import "./Button.css";

export default function Button({ action }) {
  return <button onClick={action}>Buy New Ticket</button>;
}
