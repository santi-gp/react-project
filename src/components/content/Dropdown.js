import React, { useState } from 'react'
import './Dropdown.css'
function Dropdown({ title, children }) {
    const [open, setOpen] = useState(false)
    return (
        <div className="show_info">
            <div className='show_first' >
                <h4>{title}</h4>
                <button onClick={() => setOpen((v) => !v)}>
                    {open ? '-' : '+'}
                </button>
            </div>

            <div className={`show_info ${open ? '' : 'close_info'
                }`}>
                {children}
            </div>
        </div>
    )
}

export default Dropdown

