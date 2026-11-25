import useToggle from "../Hook/useToggle";
function ToggleExample() {
  const { value, toggle, setTrue, setFalse } = useToggle();
  return (
    <div>
      {value ? "ON" : "OFF"}
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Set ON</button>

      <button onClick={setFalse}>Set OFF</button>
    </div>
  );
}

export default ToggleExample;
