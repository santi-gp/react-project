import React, {useState} from 'react'

function computer(n) {
    if (n === 0) {
        return 1;
    }
    return n * computer(n-1)
}
const Factorial = () => {
    const [n, setN] = useState(0);
    const factorial = computer(n); 
    //usando useMemo
    //const factorial = useMemo(() => computer(n),[n]);
    //fin useMemo
    const handleChange = (e) => {
        setN(e.target.value);
    }
    return (
        <>
            Factorial de 
            <input 
            style={{width: '4em', margin:'0 0.5em', paddingLeft:'0.5em'}}
                type='number'
                value={n}
                min='0'
                onChange={handleChange} />
            es: {factorial}
        </>
    )
}

export default Factorial