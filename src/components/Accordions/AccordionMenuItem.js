import React from 'react'
import './AccorMenu.css'

function AccordionItem({ item, onToggle, active }) {
  const { header, content } = item;
  return (
    <>
      <div className={`accorMenu ${active ? "active" : ""}`}>
        <div className='accorMenu_title' onClick={onToggle}>
          <div>{header}</div>
          <div>{active ? '-' : '+'}</div>
        </div>
        <div className={`accorMenu_content ${active ? "open" : ""}`}>
          {content}
        </div>
      </div>
    </>
  )
}

export default AccordionItem