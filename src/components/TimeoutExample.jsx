import { useState } from "react";
import useTimeout from "../Hook/useTimeout";

export default function TimeoutExample() {
  
const[massage,setMassage]=useState("Waiting")
const {start, cancel, isScheduled}=useTimeout(
   () => setMassage("stop"),
    1000,false  );
  return (
    <div>
        <h2>{massage}</h2>
    <button onClick={start}>start</button>
    <button onClick={cancel}>cancel</button>
    {isScheduled ? "Scheduled" : "Not scheduled"}
    </div>
  );
}