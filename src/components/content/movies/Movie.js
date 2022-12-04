import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteMovie, getMovie } from './listMovies';

function User() {
    const navigate = useNavigate();
    const params = useParams();
    const movie = getMovie(params.movieId);
    //const user = getUser(parseInt(params.userId));
    const handleDelete = () => {
        deleteMovie(movie.id);
        navigate("/examples")
    }
    if (!movie) {
        return <div>No existe película</div>;
    }
    return (
        <>
            <h4 className='my-1'>{movie.titulo}</h4>
            <h5 className='my-1'>{movie.director}</h5>
            <img style={{ width: '30%' }} src={movie.imagen} alt={movie.titulo} />
            <p className='my-1'>{movie.sinopsis}</p>
            <button
                onClick={handleDelete}
                className='bgc-red color-white border-r5 my-1'>
                Borrar
            </button>
        </>

    )
}

export default User

