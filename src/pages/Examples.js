import React from 'react'
import { Outlet } from 'react-router-dom'
import Toggle from '../components/content/Toggle'
import AccordionMenu from '../components/sidebars/AccordionMenu'
import dataExamples from '../components/sidebars/sidebarExamples'

function Examples() {
  return (
    <>
      <section>
        <Outlet />
      </section>
      <aside>
        <AccordionMenu dataArray={dataExamples} />
        <div>
          <Toggle />
        </div>
      </aside>
    </>
  )
}

export default Examples