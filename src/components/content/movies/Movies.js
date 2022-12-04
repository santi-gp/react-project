import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import { getAllMovies } from './listMovies'
function Movies() {
    const movies = getAllMovies();
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
                        {movies.map((movie) => (
                            <li key={movie.id} style={styleGrid.styleLi}>
                                <Link
                                    to={movie.id.toString()}
                                    style={styleGrid.styleA}>
                                    {movie.titulo}
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