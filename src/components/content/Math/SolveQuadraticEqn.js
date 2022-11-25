import React from 'react'
import { useState } from 'react'
import styles from '../forms/Forms.module.css'

export default function SolveQuadraticEqn() {
    const [number_a, setNumber_a] = useState();
    const [number_b, setNumber_b] = useState();
    const [number_c, setNumber_c] = useState();
    const [sum1, setsum1] = useState('');
    const [sum2, setsum2] = useState('')

    const handleClick = (e) => {
        let a = parseFloat(number_a);
        let b = parseFloat(number_b);
        let c = parseFloat(number_c);
        let d = b * b - 4 * a * c;
        if (d > 0) {
            setsum1((-b + Math.sqrt(d)) / 2.0);
            setsum2((-b - Math.sqrt(d)) / 2.0);
            e.preventDefault();
        }
        else if (d === 0) {
            setsum1(-b);
            setsum2(-b);
            e.preventDefault();
        }
        else {
            alert('|No existe solución en los Reales!');
            e.preventDefault();
        }
    };

    return (
        <>
            <h4 className='txt-center'>Ecuación Cuadrática</h4>
            <h5 className='txt-center'>ax<sup>2</sup>+bx+c, a &ne; 0</h5>
            <form className={styles.forms}>
                <label>
                    Ingresar <var>a</var>
                </label>
                <input type="text" name="number_a" onChange={(e) => {
                    setNumber_a(e.target.value)
                }}
                    value={number_a || ''} placeholder='1' />
                <label>
                    Ingresar <var>b</var>
                </label>
                <input type="text" name="number_b" onChange={(e) => {
                    setNumber_b(e.target.value)
                }}
                    value={number_b || ''} placeholder='2' />
                <label>
                    Ingresar <var>c</var>
                </label>
                <input type="text" name="number_c" onChange={(e) => {
                    setNumber_c(e.target.value)
                }}
                    value={number_c || ''} placeholder='1' />
                <button className={styles.submit} onClick={handleClick}>Resolver</button>
            </form>
            <p className='txt-center'>x<sub>1</sub>= {sum1}</p>
            <p className='txt-center'>x<sub>2</sub>= {sum2}</p>
        </>
    )
}
