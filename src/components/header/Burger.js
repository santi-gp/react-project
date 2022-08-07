import React, { useState } from 'react'

function Burger() {
    const [displayNav, setDisplayNav] = useState(false);
    const toggleNav = () => {setDisplayNav(!displayNav)};
    return (
        <>
            <button onClick={toggleNav} className="mburger">
                <div></div>
                <div></div>
                <div></div>
            </button>
        </>
    )
}

export default Burger
