import React, { useState } from 'react'
import AccordionItem from './AccordionMenuItem'
import dataMenu from './sidebarHooks';
import './AccorMenu.css';

function AccordionMenu() {
    //const dataMenu = getAllLinks();
    const [click, setClick] = useState('0');
    const handleToggle = (index) => {
        if (click === index) {
            return setClick('0')
        }
        setClick(index);
    }
    return (
        <>
            <div className='accorMenu_wrapper'>
                {dataMenu.map((item, index) =>
                (
                    <AccordionItem
                        key={index}
                        item={item}
                        onToggle={() => handleToggle(index)}
                        active={click === index}
                    />
                )
                )}
            </div>
        </>
    )
}

export default AccordionMenu