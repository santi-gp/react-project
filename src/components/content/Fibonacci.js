import React, { useMemo, useState } from 'react'
import { FaPlus } from "react-icons/fa";

function fib(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
function Fibonacci() {
  const [num, setNum] = useState(0);
  const fibonacci = useMemo(() => fib(num), [num]);
  const handleChange = () => {
    setNum(num + 1)
  }
  return (
    <div className='flex-row jc-center ai-center'>
      <h4 className='mr-2'>Fibonacci de {num} es {fibonacci}</h4>
      <button className='bgc-3 border-r5' onClick={handleChange}><FaPlus /></button>
    </div>
  )
}

export default Fibonacci