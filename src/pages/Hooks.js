import React from 'react'
import { Outlet } from 'react-router-dom'
import AccordionMultiple from '../components/content/AccordionMultiple'

function Hooks() {
  return (
    <>
      <section>
        <Outlet />
      </section>
      <aside>
        <AccordionMultiple />
      </aside>
    </>
  )
}

export default Hooks