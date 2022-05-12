import React, { useState } from 'react'
import AccordionItem from './AccordionItem'
const dataMenu = [
    {
        header: 'Link1',
        content: 'This is Lin1'
    },
    {
        header: 'Link2',
        content: 'This is Lin2'
    },
    {
        header: 'Link3',
        content: 'This is Lin3'
    }
]
function AccordionMenu() {
    const [click, setClick] = useState('0');
    const handleToggle = (index) => {
        if (click === index) {
            return setClick('0')
        }
        setClick(index);
    }
    return (
        <>
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
        </>
    )
}

export default AccordionMenu