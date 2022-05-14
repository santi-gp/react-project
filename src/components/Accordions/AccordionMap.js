import React, {useState} from 'react';

function AccordionMap({ title, content }) {
  const [active, setActive] = useState(false);
  return (

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

  );
}

export default AccordionMap;
