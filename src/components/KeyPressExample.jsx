import useKeyPress from "../Hook/useKeyPress";

export default function KeyPressExample() {
  const isEscapePressed = useKeyPress("Escape");

  return (
    <div>
<p>{isEscapePressed ? "Shift" : "Escape"}</p>
    </div>
  );
}