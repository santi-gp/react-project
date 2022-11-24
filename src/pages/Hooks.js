import React from 'react'
import { Outlet } from 'react-router-dom'
import AccordionMenu from '../components/accordions/AccordionMenu'
import InterpolationLagrange from '../components/content/Math/InterpolationLagrange'

function Hooks() {
  return (
    <>
      <section>
        <Outlet />
      </section>
      <aside>
        <AccordionMenu />
        <InterpolationLagrange />
      </aside>
    </>
  )
}

export default Hooks