import React, { useEffect, useState } from 'react';
import styles from './UpdateForm.module.css';

function UpdateForm(props) {
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const inputChanged = e => {
        //const { name, value } = e.target;
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) {
            props.updateUser(user);
        }
    }
    return (
        <form className={styles.crudform}>
            <label>Nombre</label>
            <input
                type='text'
                name='name'
                value={user.name}
                onChange={inputChanged} />
            <label>Usuario</label>
            <input
                type='text'
                name='username'
                value={user.username}
                onChange={inputChanged} />
            <div>
                <button className={styles.submit}
                    type='submit'
                    onClick={handleSubmit}>
                    Editar</button>
                <button className={styles.submit}
                    type="submit"
                    onClick={() => props.setEditing(false)} >
                    Cancelar</button>
            </div>
        </form>
    );
}

export default UpdateForm;
