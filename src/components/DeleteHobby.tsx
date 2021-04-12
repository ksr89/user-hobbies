import React from 'react';
import { deleteUserHobby } from '../services/hobbies';

import { HobbyModel } from '../models';

type DeleteHobbyProps = {
  selectedUser: string
  selectedHobby: string
  hobbiesList: HobbyModel[]
  updateHobbiesList(data: HobbyModel[]): any
}

const DeleteHobby = (props: DeleteHobbyProps) => {

  const deleteHobbyHandler = () => {
    const { selectedUser, selectedHobby } = props;
    deleteUserHobby(selectedUser, selectedHobby).then((data) => {
      let hobbiesList = props.hobbiesList;

      hobbiesList = hobbiesList.filter((hobby: any) => {
        if (hobby.id !== data.id) {
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
