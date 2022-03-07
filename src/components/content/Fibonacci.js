import React, { useMemo, useState } from 'react'

function fib(n){
    if(n<=0) return 0;
    if(n===1) return 1;
    return fib(n-1) + fib(n-2);
}
function Fibonacci() {
    const [num, setNum] = useState(0);
    const fibonacci = useMemo(() => fib(num),[num]);
    const handleChange = ()=>{
        setNum(num+1)
    }
  return (
    <>
    <h2>Fibonacci de {num} es {fibonacci}</h2>
    <button onClick={handleChange}>+</button>
    </>
  )
}

export default Fibonacci