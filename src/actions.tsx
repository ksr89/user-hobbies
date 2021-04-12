export const UPDATE_USERS_LIST = "UPDATE_USERS_LIST";
export const UPDATE_SELECTED_USER = "UPDATE_SELECTED_USER";
export const UPDATE_HOBBIES_LIST = "UPDATE_HOBBIES_LIST";
export const ADD_NEW_HOBBY = "ADD_NEW_HOBBY";
export const TOGGLE_POPUP = 'TOGGLE_POPUP';
export const UPDATE_SELECTED_HOBBY = 'UPDATE_SELECTED_HOBBY';

export const updateUsersList = (data: any) => {
  return { type: UPDATE_USERS_LIST, data };
}

export const updateSelectedUser = (data: any) => {
  return { type: UPDATE_SELECTED_USER, data };
}

export const updateHobbiesList = (data: any) => {
  return { type: UPDATE_HOBBIES_LIST, data };
}

export const addNewHobby = (data: any) => {
  return { type: ADD_NEW_HOBBY, data };
}

export const togglePopup = (id: any) => {
  return { type: TOGGLE_POPUP, id };
}

export const updateSelectedHobby = (data: any) => {
  return { type: UPDATE_SELECTED_HOBBY, data };
}