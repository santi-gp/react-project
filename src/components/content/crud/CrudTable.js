import React from 'react';
import styles from './CrudTable.module.css';
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const CrudTable = (props) => {
  return (
    <div className={styles.crudtable}>
      <div className='grid-4 bgc-4 font-bold'>
        <div>ID</div>
        <div>Nombre</div>
        <div>Usuario</div>
        <div>Acciones</div>
      </div>
      {props.users.length > 0 ? (
        props.users.map(user => {
          const { id, name, username } = user;
          return (
            <div key={id} className='grid-4'>
              <div>{id}</div>
              <div>{name}</div>
              <div>{username}</div>
              <div>
                <FaPen
                  className='color-yellow font-bold'
                  onClick={() => props.editUser(id, user)}
                />
                <FaTrash
                  className='color-red font-bold'
                  onClick={() => props.deleteUser(id)}
                />
              </div>
            </div>
          )
        }
        )
      ) :
        (
          <div colSpan={4}>Usuarios no encontrados</div>
        )
      }
    </div>
  );
};
export default CrudTable;


