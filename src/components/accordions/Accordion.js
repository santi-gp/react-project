import React, { useState } from 'react';
import './Accordion.css'

const accordionData =
{
  title: 'section1',
  content: 'content1'
}

const { title, content } = accordionData;
function Accordion() {
  const [active, setActive] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion-item">
        <div
          className="accordion-title"
          onClick={() => setActive(!active)}
        >
          <div>{title}</div>
          <div>{active ? '-' : '+'}</div>
        </div>
        {active && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
}

export default Accordion;
