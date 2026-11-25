import { useState, useEffect} from "react";

export default function useTimeout(callback, delayMs, enabled = true) {
  const [isScheduled, setIsScheduled] = useState(enabled);
  useEffect(() => {
    if (isScheduled) {
      const id = setTimeout(callback, delayMs);

      return () => clearTimeout(id);
    }
  }, [isScheduled, delayMs, callback]);
  function start() {
    setIsScheduled(true);
  }
  function cancel() {
    setIsScheduled(false);
  }
  return { start, cancel, isScheduled };
}
