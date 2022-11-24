import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
//import '../../App.css';
//import Burger from './Burger'
function Header() {
    const [displayNav, setDisplayNav] = useState(false);
    const toggleNav = () => { setDisplayNav(!displayNav) };
    const closeNav = () => setDisplayNav(false);
    return (
        <header className='bgc-1 py-1'>
            <div className='margin-wrap flex-row ai-center jc-between'>
                <h1 className="f-grow1 color-3">Logo</h1>
                <div onClick={toggleNav} className="mburger">
                    {!displayNav ? (
                        <>
                            <div></div>
                            <div></div>
                            <div></div>
                        </>
                    ) : (
                        <>
                            <div className='mburger-1'></div>
                            <div className='mburger-2'></div>
                            <div className='mburger-3'></div>
                        </>
                    )
                    }
                </div>
                <nav className={displayNav ? "open" : "nav"}>
                    <ul className='flex-row jc-between ai-center'>
                        <li>
                            <NavLink
                                onClick={closeNav}
                                to=""
                                style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={closeNav}
                                to="hooks" style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })}
                            >
                                Hooks
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={closeNav}
                                to="clases" style={({ isActive }) => ({ color: isActive ? 'cyan' : 'white' })}
                            >
                                Ejemplos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header