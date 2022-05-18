import React, { useState } from 'react';
import styles from './CrudForm.module.css';

function CrudForm(props) {
    const initUser = {
        id: null,
        name: '',
        username: ''
    };
    const [user, setUser] = useState(initUser);
    const inputChanged = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        );
    };
    const handleSubmit = (e) => {
        if (user.name && user.username) {
            inputChanged(e, props.addUser(user));
        }
        e.preventDefault();
    };
    return (
        <form className={styles.crudform}>
            <label>Nombre</label>
            <input
                type='text'
                name='name'
                placeholder='Nombre'
                value={user.name}
                onChange={inputChanged} />
            <label>Usuario</label>
            <input
                type='text'
                name='username'
                placeholder='Usuario'
                value={user.username}
                onChange={inputChanged} />
            <button className={styles.submit}
                type='submit'
                onClick={handleSubmit}>
                Añadir</button>
        </form>
    );
}

export default CrudForm;
