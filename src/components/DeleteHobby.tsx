import React from 'react';
import { deleteUserHobby } from '../services/hobbies';

const DeleteHobby = (props: any) => {

  const deleteHobbyHandler = () => {
    deleteUserHobby(props.selectedUser, props.selectedHobby).then((data) => {
      let hobbiesList = props.hobbiesList;

      hobbiesList = hobbiesList.filter((hobby: any) => {
        if(hobby.id !== data.id) {
          return hobby
        }
      })

      props.updateHobbiesList(hobbiesList);

    })
  }

  return (
    <>
      <h2>Are you sure to delete the hobby.</h2>
      <button onClick={deleteHobbyHandler}>Delete</button>
    </>
  )
}

export default DeleteHobby;
