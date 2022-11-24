import React, { useState } from 'react'
import styles from '../forms/Forms.module.css'
const calcular = (x, y, z) => {
    var suma = 0;
    var prod;

    for (var j = 0; j < x.length; j++) {
        prod = 1;
        for (var i = 0; i < x.length; i++) {
            if (i !== j) {
                prod *= (z - x[i]) / (x[j] - x[i]);
            }
        }
        suma += prod * y[j];
    }
    return suma;
}
function InterpolationLagrange() {
    const [value_a, setValue_a] = useState('');
    const [value_b, setValue_b] = useState('');
    const [value_c, setValue_c] = useState('');
    const [result, setResult] = useState();

    let x = value_a.split(' ');
    let y = value_b.split(' ');
    let z = parseFloat(value_c);
    const handleClick = (e) => {
        setResult(calcular(x, y, z));
        e.preventDefault();
    }
    return (
        <>
            <form className={styles.forms}>
                <input type="text" placeholder="0 2 3" onChange={(e) => setValue_a(e.target.value)} />
                <input type="text" placeholder="7 11 28" onChange={(e) => setValue_b(e.target.value)} />
                <input type="text" placeholder="1" onChange={(e) => setValue_c(e.target.value)} />
                <button className={styles.submit} onClick={handleClick}>Interpolar</button>
            </form>
            {result}
        </>
    )
}

export default InterpolationLagrange