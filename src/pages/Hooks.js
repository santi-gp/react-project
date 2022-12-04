import React from 'react'
import { Outlet } from 'react-router-dom'
import AccordionMenu from '../components/sidebars/AccordionMenu'
import dataHooks from '../components/sidebars/sidebarHooks'

function Hooks() {
  return (
    <>
      <section>
        <Outlet />
      </section>
      <aside>
        <AccordionMenu dataArray={dataHooks} />
      </aside>
    </>
  )
}

export default Hooks