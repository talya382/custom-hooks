
import { useState } from "react";

export default function useTextarea(initial = "") {
  const [value, setValue] = useState(initial);

  function onChange(event) {
    setValue(event.target.value);
  }

  function reset() {
    setValue(initial);
  }

  return {
    value,
    onChange,
    setValue,
    reset
  };
}
