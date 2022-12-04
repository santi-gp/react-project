import React, { useState } from 'react'
import styles from './Forms.module.css';
function FormValidate() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        let emailValid = false;
        if (email.length === 0) {
            setEmailError('Ingrese email');
        }
        else if (email.length < 6) {
            setEmailError('Email debe contener mínimo de 6 carateres')
        }
        else if (email.indexOf('') > 0) {
            setEmailError('El email no puede contener espacios')
        }
        else {
            setEmailError("")
            emailValid = true
        }

        let passwordValid = false;
        if (password.length === 0) {
            setPasswordError('Ingrese password');
        }
        else if (password.length < 6) {
            setPasswordError('La contraseña debe contener mínimo de 6 carateres')
        }
        else if (password.indexOf('') > 0) {
            setPasswordError('La contraseña no puede contener espacios')
        }
        else {
            setPasswordError("")
            passwordValid = true
        }

        if (emailValid & passwordValid) {
            alert('Email: ' + email + '\n Password: ' + password);
            setEmail('');
            setPassword('');
        }
    }
    return (
        <>
            <form className={styles.forms} onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                {emailError.length > 0 && <span className='mb-2 color-red'>{emailError}</span>}
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                {passwordError.length > 0 && <span className='color-red'>{passwordError}</span>}
                <button className={styles.submit}>Enviar</button>
            </form>
            {email} 
            {password}
        </>

    )
}

export default FormValidate