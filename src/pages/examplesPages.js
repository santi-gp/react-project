import React from 'react'
import Algebra from '../components/content/Math/Algebra'
import InterpolationLagrange from '../components/content/Math/InterpolationLagrange'

export function Calculators() {
    return (
        <article>
            <Algebra />
        </article>
    )
}

export function Numerical() {
    return (
        <article>
            <InterpolationLagrange />
        </article>
    )
}

