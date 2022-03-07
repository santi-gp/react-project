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
            <h4>{user.title}</h4>
            <h5>{user.director}</h5>
            <p>{user.actors}</p>
            <button onClick={handleDelete} >Borrar</button>
        </>
        
    )
}

export default User