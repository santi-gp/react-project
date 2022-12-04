/*eslint no-new-func: "error"*/
import React, { useState } from 'react'

function Bisection() {
    const [func, setFunc] = useState('');
    const [value_x, setValue_x] = useState('');
    const [result, setResult] = useState();
    
        function calcule(_param, _fexpr) {
            var f = function(_param){
                var t = + _fexpr ;
                return t;
            }
        var a = parseFloat(value_x);
        return f(a);
    }
    const handleBisection = (e) => {
        setResult(calcule('x', func));
        e.preventDefault();
    }
    return (
        <>
            <form>
                <input type='text' onChange={(e) => setFunc(e.target.value)} value={func} />
                <input type='text' onChange={(e) => setValue_x(e.target.value)} value={value_x} />
                <button onClick={handleBisection}>Calcular</button>
                {result}
            </form>
        </>
    )
}

export default Bisection
