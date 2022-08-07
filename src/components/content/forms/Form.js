import React, { useState } from 'react'
import countries from './countries';
import styles from './Forms.module.css';
/*const title_h4 = {
    name: 'Crea',
    laste_name: 'tu cuenta'
};*/
function Form() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [country, setCountry] = useState("")
    const [check, setCheck] = useState(false)
    const handleSubmit = (e) => {
        console.log(`
        email: ${name}
        password: ${password}
        country: ${country}
        check: ${check}
        `);
        e.preventDefault();
    }
    return (
        <form className={styles.forms} onSubmit={handleSubmit}>
            {/*<h4>{title_h4.name} {title_h4.laste_name}</h4>*/}
            <label>Email</label>
            <input
                name="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required />
            <label>Contraseña</label>
            <input
                name="password"
                type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required />
            <label>Comunidad autónoma</label>
            <select
                name="country"
                value={country}
                onChange={e => setCountry(e.target.value)}
                required>
                <option key=""></option>
                {countries.map(country => (
                    <option key={country}>{country}</option>
                ))}
            </select>
            <div className={styles.marginTop}>
                <input
                    name="check"
                    type="checkbox"
                    onChange={e => setCheck(e.target.value)}
                    required />
                <label className={styles.marginLeft}>Acepto los términos</label>
            </div>
            <button className={styles.submit}>Enviar</button>
        </form>
    )
}

export default Form
