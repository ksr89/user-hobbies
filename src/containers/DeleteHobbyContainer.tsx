import { connect } from 'react-redux';
import DeleteHobby from '../components/DeleteHobby';
import { updateHobbiesList, togglePopup } from '../actions';

const mapStateToProps = (state: any) => {
  return {
    selectedUser: state.selectedUser,
    selectedHobby: state.selectedHobby,
    hobbiesList: state.hobbiesList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateHobbiesList: (data: any) => {
      dispatch(togglePopup("-1"));
      dispatch(updateHobbiesList(data));
    },
  };
};

const DeleteHobbyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteHobby);

export default DeleteHobbyContainer;
