import { useState, useEffect } from "react";

export default function useKeyPress(key) {
  const [isPressed, setIsPressed] = useState(false);

  function handleKeyDown(e) {
    if (e.key === key) {
      setIsPressed(true);
    }
  }

  function handleKeyUp(e) {
    if (e.key === key) {
      setIsPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [key]);

  return isPressed;
}