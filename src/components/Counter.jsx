import UseCounter from "../Hook/useCounter";
function Counter  ()  {
   const { value,inc,dec,reset}=UseCounter(5)
   
   
    return (  
<div>
    {value}
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
    <button onClick={reset}>reset</button>
</div>


    );
}
 
export default Counter;