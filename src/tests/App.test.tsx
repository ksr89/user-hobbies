import React from 'react';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { render, screen } from '@testing-library/react';

import App from '../components/App';
import Users from '../components/Users';
import Hobbies from '../components/Hobbies';

import { userData, hobbiesData } from '../data'

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

test('Renders <App /> Component', () => {
  const wrapper = shallow(
    <App />
  );
  expect(wrapper.find('h1').text()).toEqual('User Hobbies');
});

test('Renders <Users /> Component', () => {
  const props = {
    usersList: userData
  }

  const wrapper = shallow(
    <Users {...props} />
  );

  expect(wrapper.find(".user-add-form")).toHaveLength(1);
});

test('Renders <Hobbies /> Component', () => {
  const props = {
    hobbiesList: hobbiesData
  }

  const wrapper = shallow(
    <Hobbies {...props} />
  );

  expect(wrapper.find(".hobby-add-form")).toHaveLength(1);
});
