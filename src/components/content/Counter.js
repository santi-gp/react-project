import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
//Hook personalizado
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
const styleCounter = {
    width: '50%',
    margin: '2rem auto',
    padding: '1rem',
    backgroundColor: '#00c7f1',
    borderRadius: '5px',
    styleDiv: {
        display: 'flex',
        margin: '1rem 0',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    styleButton: {
        backgroundColor: '#1d213a',
        color: '#fff',
        padding: '.5em 1em',
        borderRadius: '5px'
    }

}
function Counter() {
    const { value, increment, decrement, reset } = useCounter(0);
    //useLogger(value);
    return (
        <>
            <div style={styleCounter}>
                <h4>Contador</h4>
                <div style={styleCounter.styleDiv}>
                    <button
                        className='bgc-1 color-white border-r5'
                        onClick={decrement} >
                        <FaMinus />
                    </button>
                    <strong>{value}</strong>
                    <button
                        className='bgc-1 color-white border-r5'
                        onClick={increment}>
                        <FaPlus />
                    </button>
                </div>
                <button style={styleCounter.styleButton} onClick={reset}>Reiniciar</button>
            </div>

        </>
    )
}

export default Counter