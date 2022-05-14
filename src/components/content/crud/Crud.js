import React, { useState } from 'react';
import CrudForm from './CrudForm';
import userList from './crudList';
import CrudTable from './CrudTable';
import UpdateForm from './UpdateForm';

export const Crud = () => {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: '', username: '' };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };


  return (
    <>
      <h2>Crud React Hooks</h2>
      {editing ? (
        <div>
          <h3 className='txt-center'>Editar Usuario</h3>
          <UpdateForm
            currentUser={currentUser}
            setEditing={setEditing}
            updateUser={updateUser}
          />
        </div>
      ) :
        <div>
          <h3 className='txt-center my-1'>Añadir Usuario</h3>
          <CrudForm
            addUser={addUser}
          />
        </div>}
      <div>
        <CrudTable
          users={users}
          deleteUser={deleteUser}
          editUser={editUser}
        />
      </div>
    </>)
    ;
};

