import React, { useState } from 'react'

function Toggle() {
    const url = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png";
    //const displayImage = false;
    const [displayImage, setDisplayImage] = useState(false);
    const toggleImage = () => setDisplayImage(!displayImage);
    return (
        <>
            <button
                className='bgc-1 color-white border-r5'
                onClick={toggleImage}>
                Imagen
            </button>
            <div className='py-1'>
                {displayImage &&
                    <img src={url} style={{ width: 300 }} alt='Star Wars' />}
            </div>

        </>
    )
}

export default Toggle