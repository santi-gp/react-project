import React from 'react'
import { NavLink } from 'react-router-dom'
import Burger from './Burger'
function Header() {
    return (
        <header>
            <div className="logo">
                <h2>Logo</h2>
            </div>
            <Burger/>
            <nav>
                <ul>
                    <li><NavLink to="" style={({isActive}) => ({color: isActive ? 'cyan' : 'white'})}>Inicio</NavLink></li>
                    <li><NavLink to="hooks" style={({isActive}) => ({color: isActive ? 'cyan' : 'white'})}>Hooks</NavLink></li>
                    <li><NavLink to="clases" style={({isActive}) => ({color: isActive ? 'cyan' : 'white'})} >Clases</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header