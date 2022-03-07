import React from 'react';
import styles from './CrudTable.module.css';
const CrudTable = (props) => {
  return (
    <table className={styles.crudtable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => {
            const { id, name, username } = user;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>
                  <button className={styles.btnEdit}
                    onClick={() => props.editUser(id, user)}
                  >
                    Editar</button>
                  <button className={styles.btnDelete}
                    onClick={() => props.deleteUser(id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )
          }
          )
        ) : (
          <td colSpan={4}>Usuarios no encontrados</td>
        )
        }

      </tbody>

    </table>
  );
};
export default CrudTable;


