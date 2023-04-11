export default function Navbar(props) {
  return (
    <nav>
      <button onClick={props.onClick}>New game</button>
    </nav>
  );
}
