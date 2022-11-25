import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { getAllUsers } from './users'
function Movies() {
    const users = getAllUsers();
    const styleGrid = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        styleLi: {
            marginTop: '2%'
        },
        styleA: {
            color: '#2588a7'
        }
    };
    return (
        <>
            <div style={styleGrid}>
                <div>
                    <h2>Películas</h2>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id} style={styleGrid.styleLi}>
                                <Link
                                    to={user.id.toString()}
                                    style={styleGrid.styleA}>
                                    {user.titulo}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='px-2'>
                    <h3>Seleccionar película</h3>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Movies