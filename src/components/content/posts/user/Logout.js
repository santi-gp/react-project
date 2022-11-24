import React from 'react'
import styles from '../../forms/Forms.module.css';
function Logout({ user, setUser }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser('');
    }
    return (
        <>
            <form className={styles.forms} onSubmit={handleSubmit}>
                <span>Conectado como: {user}</span>
                <button className={styles.submit}>Logout</button>
            </form>
        </>
    )
}

export default Logout