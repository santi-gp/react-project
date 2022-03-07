import React, { useEffect, useState } from 'react'

function Logged() {
    const [loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
        localStorage.setItem("loggedIn", loggedIn);
    }, [loggedIn]);
    //console.log(loggedIn);
    const handleLogged = () => setLoggedIn(!loggedIn);
    return (
        <>
            <p>{loggedIn ? '¡Bienvenido!' : 'Desconectado'}</p>
            <button onClick={handleLogged} >{loggedIn ? 'Salir' : 'Entrar'}</button>
        </>

    )
}

export default Logged
