import { useRef, useEffect } from "react";

export default function usePrevious(value) {
const previousValue=useRef();
useEffect(() => {
  previousValue.current = value;
}, [value]);
}