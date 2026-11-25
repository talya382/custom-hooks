import { useState } from "react";
import useInterval from "../Hook/useInterval";

export default function IntervalExample() {
  const [count, setCount] = useState(0);
  const { start, stop, isRunning } = useInterval(
    () => setCount((prev) => prev + 1),
    1000,
    false,
  );
  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>

      <p>{isRunning ? "Running" : "Stopped"}</p>
    </div>
  );
}
