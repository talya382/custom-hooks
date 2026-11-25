import { useState } from "react";

export default function UseCounter(initial = 0) {
  const [value, setValue] = useState(initial);
  function inc() {
    setValue(value + 1);
  }
  function dec() {
    setValue(value - 1);
  }
  function reset() {
    setValue(initial);
  }
  return{
    value,inc,dec,reset
  }
}
