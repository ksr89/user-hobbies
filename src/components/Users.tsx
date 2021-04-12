import React, { useEffect, useState } from 'react';
import { getUsers, addUser } from '../services/users';
import { UserModel } from '../models';

type UsersProps = {
  usersList: UserModel[]
  selectedUser: string
  updateUsersList(data: UserModel[]): any
  updateSelectedUser(userId: string): any
}

const Users = (props: UsersProps) => {

  const [newUserName, setNewUserName] = useState<string>('');

  async function fetchUserData() {
    const response = await getUsers();
    props.updateUsersList(response);
  }

  async function addNewUser(name: string) {
    const response = await addUser(name);
    props.updateUsersList([response]);
    setNewUserName('');
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  const userAddFormHandleSubmit = (event: any) => {
    event.preventDefault();
    if (newUserName) {
      addNewUser(newUserName)
    }
  }

  const newUserNameOnChangeHandle = (event: any) => {
    setNewUserName(event.target.value);
  }

  const userSelectClickHandler = (userId: string) => {
    props.updateSelectedUser(userId);
  }

  return (
    <>
      <div className="user-add-form">
        <form onSubmit={userAddFormHandleSubmit}>
          <input required placeholder="Enter user name" type="text" value={newUserName} onChange={newUserNameOnChangeHandle} />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className="users-list">
        <ul>
          {
            props.usersList.map((user: any, index: any) => {
              return (
                <li key={`user-${user.id}`}>
                  <button onClick={() => { userSelectClickHandler(user.id) }} className={`${props.selectedUser === user.id ? 'selected' : null}`}>
                    <span>{user.name}</span>
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default Users;
