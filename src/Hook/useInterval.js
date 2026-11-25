import { useState, useEffect } from "react";

export default function useInterval(callback, intervalMs, enabled = true) {
  const [isRunning,setIsRunning]=useState(enabled)
 useEffect(() => {
  if (isRunning) {
    const id = setInterval(callback, intervalMs);

    return () => clearInterval(id);
  }
}, [isRunning, intervalMs, callback]);
function start() {
 setIsRunning(true)
}

function stop() {
  setIsRunning(false)
}
  return { start, stop, isRunning };
}