import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteUser, getUser } from './users';

function User() {
    const navigate = useNavigate();
    const params = useParams();
    const user = getUser(parseInt(params.userId));
    const handleDelete = () => {
        deleteUser(user.id);
        navigate("/clases")
    }
    return (
        <>
            <h4 className='my-1'>{user.title}</h4>
            <h5 className='my-1'>{user.director}</h5>
            <p className='my-1'>{user.actors}</p>
            <button
                onClick={handleDelete}
                className='bgc-red color-white border-r5 my-1'>
                Borrar
            </button>
        </>

    )
}

export default User