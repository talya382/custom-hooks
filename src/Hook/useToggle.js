import { useState } from "react";

function useToggle() {
  const [value, setValue] = useState(false);
  function toggle() {
    !value ? setValue(true) : setValue(false);
  }
  function setTrue() {
    setValue(true);
  }
  function setFalse() {
    setValue(false);
  }
  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
}

export default useToggle;
