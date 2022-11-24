import React, { useState } from 'react'
import styles from '../../forms/Forms.module.css';
function Register({ setUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handlePasswordRepeat = (e) => {
        setPasswordRepeat(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username);
    }
    return (
        <>
            <form className={styles.forms} onSubmit={handleSubmit}>
                <label>Usuario</label>
                <input type='text' name='userRegister' value={username} onChange={handleUsername} />
                <label>Contraseña</label>
                <input type='password' name='passwordRegister' value={password} onChange={handlePassword} />
                <label>Repetir contraseña</label>
                <input type='password' name='passwordRepeatRegister' value={passwordRepeat} onChange={handlePasswordRepeat} />
                <button className={styles.submit} disabled={username.length === 0 || password.length === 0 || password !==
                    passwordRepeat}>Registrar</button>
            </form>
        </>
    )
}

export default Register