import React from 'react'
import { Outlet } from 'react-router-dom'
import AccordionMenu from '../components/accordions/AccordionMenu'

function Hooks() {
  return (
    <>
      <section>
        <Outlet />
      </section>
      <aside>
        <AccordionMenu />
      </aside>
    </>
  )
}

export default Hooks