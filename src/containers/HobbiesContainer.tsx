import { connect } from 'react-redux';
import Hobbies from '../components/Hobbies';
import { updateHobbiesList, addNewHobby, togglePopup, updateSelectedHobby } from '../actions';

const mapStateToProps = (state: any) => {
  return {
    selectedUser: state.selectedUser,
    hobbiesList: state.hobbiesList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateHobbiesList: (data: any) => {
      dispatch(updateHobbiesList(data));
    },
    addNewHobby: (data: any) => {
      dispatch(addNewHobby(data));
    },
    updateSelectedHobby: (data: string) => {
      dispatch(updateSelectedHobby(data));
      dispatch(togglePopup("0"));
    }
  };
};

const HobbiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Hobbies);

export default HobbiesContainer;
