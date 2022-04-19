import React from 'react';
import './Accordion.css'
import AccordionMap from './AccordionMap';
import { Link } from 'react-router-dom';

const accordionData = [
    {
        title: 'Formularios',
        content:
            <ul>
                <li><Link to="reactForm">React Form</Link></li>
                <li><Link to='reactFormik'>React Formik</Link></li>
                <li><Link to='hookForm'>React Hook Form</Link></li>
            </ul>
    },
    {
        title: 'Ejemplos1',
        content:
            <ul>
                <li><Link to="rating">Clasificación</Link></li>
            </ul>
    },
    {
        title: 'section3',
        content: 'content3'
    }
]
function AccordionMultiple() {
    return (
        <div className="accordion">
            {accordionData.map(({ title, content }) => (
                <AccordionMap key={title} title={title} content={content} />
            ))}
        </div>);
}

export default AccordionMultiple;
