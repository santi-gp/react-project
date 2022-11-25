import React from 'react'
import { Outlet } from 'react-router-dom'
import AccordionMenu from '../components/sidebars/AccordionMenu'
import dataMenu from '../components/sidebars/sidebarHooks'

function Hooks() {
  return (
    <>
      <section>
        <Outlet />
      </section>
      <aside>
        <AccordionMenu dataArray={dataMenu} />
      </aside>
    </>
  )
}

export default Hooks