import React, { useState } from 'react';
import styles from './MyForm.module.css';
function MyForm() {
    const [user, setUser] = useState(
        {
            firstName: '',
            lastName: '',
            email: ''
        }
    );
    const inputChanged = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value
            }
        );
    };
    const handleSubmit = (e) => {
        alert(`Hello ${user.firstName} ${user.lastName}`);
        e.preventDefault();
    };
    return (
        <form className={styles.myforms} onSubmit={handleSubmit}>
            <label>
                Nombre
            </label>
            <input type="text" name="firstName" onChange={inputChanged}
                value={user.firstName} placeholder='nombre' />
            <label>
                Apellido
            </label>
            <input type="text" name="lastName" onChange={inputChanged}
                value={user.lastName} placeholder='apellido' />
            <label>Email </label>
            <input type="email" name="email" onChange={inputChanged}
                value={user.email} placeholder='email' />
            <input className={styles.submit} type="submit" value="Enviar" />
        </form>
    );
}

export default MyForm;
