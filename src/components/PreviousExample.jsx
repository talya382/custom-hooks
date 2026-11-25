import { useState } from "react";
import usePrevious from "../Hook/usePrevious";

function PreviousExample() {
  const [count, setCount] = useState(0);

  const previousCount = usePrevious(count);

    return (
    <div>
      <h2>Current: {count}</h2>
      <h2>Previous: {previousCount ?? "None"}</h2>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default PreviousExample;