import React, { useState } from 'react'

//Creae Hook personalizado
const useCounter = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value - 1);
    const reset = () => setValue(initialValue);
    return { value, increment, decrement, reset };
}
/*const useLogger = value => {
    React.useEffect(() => {
        console.log("Value changed:", value);
    }, [value]);
};*/
function Counter() {
    const { value, increment, decrement, reset } = useCounter(0);
    //useLogger(value);
    return (
        <>
            <p>El valor actual es: {value}</p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Reiniciar</button>
        </>
    )
}

export default Counter