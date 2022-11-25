import React from 'react'
import Counter from './Counter'
import Factorial from './Factorial'
import Fibonacci from './Fibonacci'
import SolveQuadraticEqn from './SolveQuadraticEqn'

function Algebra() {
    const styleGrid2 = {
        marginTop: '10px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '10px',
        styleDiv: {
            marginTop: '2%'
        }
    };
    return (
        <div style={styleGrid2}>
            <div><Fibonacci /></div>
            <div><Factorial /></div>
            <div><Counter /></div>
            <div><SolveQuadraticEqn /></div>
        </div>
    )
}

export default Algebra