import React from 'react';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App';
import Hobbies from '../components/Hobbies';

import { hobbiesData } from '../data';

configure({ adapter: new Adapter() });

test('Renders <App /> Component', () => {
  const wrapper = shallow(
    <App />
  );
  expect(wrapper.find('h1').text()).toEqual('User Hobbies');
});

test('Renders <Hobbies /> Component', () => {
  const props = {
    selectedUser: "PPBqWA1",
    hobbiesList: hobbiesData,
    updateHobbiesList: jest.fn(),
    addNewHobby: jest.fn(),
    updateSelectedHobby: jest.fn(),
  }

  const wrapper = shallow(
    <Hobbies {...props} />
  );

  expect(wrapper.find(".hobby-add-form")).toHaveLength(1);
});
