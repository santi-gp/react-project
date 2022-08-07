import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import styles from './MyFormik.module.css'

function validateFirstName(value) {
    let error;
    if (!value) {
        error = 'El nombre es obligatorio';
    }
    return error;
}

function validateLastName(value) {
    let error;
    if (!value) {
        error = 'El apellido es obligatorio';
    }
    return error;
}

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'El email es obligatorio';
    }
    return error;
}
function MyFormik() {
    return (
        <Formik
            initialStatus={{ isValidating: false }}
            initialValues={{ firstName: '', lastName: '', email: '' }}
            onSubmit={(values, { setSubmitting, setStatus }) => {
                setStatus({ isValidating: true });
                setTimeout(() => {
                    console.info(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    setStatus({ isValidating: false })
                }, 400);
            }}
        >
            {({ handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                <form className={styles.myformik} onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <Field type="text" name="firstName"
                        //value={values.firstName}
                        validate={validateFirstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='nombre' />
                    <ErrorMessage name='firstName' render={msg => <span className={styles.messageError}>{msg}</span>} />
                    <label>Apellidos</label>
                    <Field type="text" name="lastName"
                        //value={values.lastName}
                        validate={validateLastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Apellidos' />
                    <ErrorMessage name='lastName' render={msg => <span className={styles.messageError}>{msg}</span>} />
                    <label>Email</label>
                    <Field type="email" name="email"
                        //value={values.email}
                        validate={validateEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='email' />
                    <ErrorMessage name='email' render={msg => <span className={styles.messageError}>{msg}</span>} />
                    <input className={styles.submit} type="submit" value="Enviar" disabled={isSubmitting} />
                </form>
            )}
        </Formik>
    );
}

export default MyFormik;
