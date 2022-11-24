import React, { useState } from 'react'
import styles from '../../forms/Forms.module.css';
function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`username = ${username}`);
    setUser(username);
  }
  return (
    <>
      <form className={styles.forms} onSubmit={handleSubmit}>
        <label>Usuario</label>
        <input type='text' name='username' value={username} onChange={handleUsername} />
        <label>Contraseña</label>
        <input type='password' name='password' />
        <button className={styles.submit}>Login</button>
      </form>
    </>
  )
}

export default Login