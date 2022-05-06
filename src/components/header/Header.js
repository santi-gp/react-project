import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
//import Burger from './Burger'
function Header() {
    const [displayNav, setDisplayNav] = useState(false);
    const toggleNav = () => { setDisplayNav(!displayNav) };
    const closeNav = () => setDisplayNav(false);
    return (
        <header>
            <div className="logo">
                <h2>Logo</h2>
            </div>
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
                <ul>
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
                            Clases
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header