import React, { useState } from 'react'
import AccordionItem from './AccordionMenuItem'
import { Link } from 'react-router-dom';
import './AccorMenu.css';

const dataMenu = [
    {
        header: 'Formularios',
        content:
            <ul>
                <li><Link to="reactForm">React Form</Link></li>
                <li><Link to='reactFormik'>React Formik</Link></li>
                <li><Link to='hookForm'>React Hook Form</Link></li>
            </ul>
    },
    {
        header: 'API RESTful',
        content: 
            <ul>
                <li><Link to="githubUsers">Obtener Datos</Link></li>
            </ul>
    },
    {
        header: 'Ejemplos',
        content:
            <ul>
                <li><Link to="rating">Clasificación</Link></li>
                <li><Link to="changeColour">Cambiar color</Link></li>
            </ul>
    },
    
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