import useCounterWithStep from "../Hook/useCounterWithStep";

export default function CounterbyStep(){
      const { value, inc, dec, reset } = useCounterWithStep(10, 2);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}