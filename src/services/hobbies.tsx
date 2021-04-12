import { userData, hobbiesData } from "../data";
const shortid = require('shortid');

export const getUserHobbies = (userId: string) => {
  return fetch('/hobbies/' + userId)
    .then(response => response.json())
    .catch((error) => {

      let userExist = false;
      userData.forEach((user) => {
        if (user.id === userId) {
          userExist = true;
        }
      })

      if (userExist) {
        return [...hobbiesData];
      } else {
        return []
      }
    });
};

export const addUserHobby = (userId: string, data: object) => {
  return fetch('/hobbies/' + userId, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .catch((error) => {
      return {
        id: shortid.generate(),
        ...data
      };
    });
};

export const deleteUserHobby = (userId: string, hobbyId: object) => {
  return fetch('/hobbies/' + userId + '/' + hobbyId, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .catch((error) => {
      return {
        id: hobbyId
      };
    });
};
