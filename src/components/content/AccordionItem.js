import React from 'react'
import './Accordion.css';

function AccordionItem({ item, onToggle, active }) {
  const { header, content } = item;
  return (
    <>
      <div className={`accordion_item ${active ? "active" : ""}`}>
        <div className='accordion-title' onClick={onToggle}>
          <div>{header}</div>
          <div>{active ? '-' : '+'}</div>
        </div>
        <div className={`content_wrapper ${active ? "open" : ""}`}>
          {content}
        </div>
      </div>
    </>
  )
}

export default AccordionItem