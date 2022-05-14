import React from 'react';
import './Accordion.css'
import AccordionMap from './AccordionMap';

const accordionData = [
    {
        title: 'Header 1',
        content: 'Content 1'
    },
    {
        title: 'Header 2',
        content: 'Content 2'
    },
    {
        title: 'Header 3',
        content: 'Content 3'
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
