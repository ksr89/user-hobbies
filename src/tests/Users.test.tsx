import React from 'react';
import { shallow, configure, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from "react-dom/test-utils";

import Users from '../components/Users';

import { userData } from '../data'

configure({ adapter: new Adapter() });

let wrapper: any;

const users = [
  {
    id: "PPBqWA1",
    name: "John"
  },
  {
    id: "PPBqWA2",
    name: "Peter"
  },
  {
    id: "PPBqWA3",
    name: "Markus"
  }
];
const newUser = {
  id: "12345",
  name: "Text"
};

jest.mock('../services/users', () => {
  return {
    getUsers: jest.fn(() => Promise.resolve(users)),
    addUser: jest.fn(() => Promise.resolve(newUser)),
  }
})

describe('<Users /> component', () => {

  const props = {
    usersList: userData,
    selectedUser: "",
    updateUsersList: jest.fn(),
    updateSelectedUser: jest.fn()
  }

  beforeEach(() => {
    wrapper = render(<Users {...props} />)
  });

  it('Renders <Users /> Component', () => {
    const props = {
      usersList: userData,
      selectedUser: "",
      updateUsersList: jest.fn(),
      updateSelectedUser: jest.fn()
    }
  
    const wrapper = shallow(
      <Users {...props} />
    );
  
    expect(wrapper.find(".user-add-form")).toHaveLength(1);
  });

  it('Validate add new user form', async () => {
    fireEvent.change(wrapper.getByPlaceholderText("Enter user name"), { target: { value: 'Text' } })
    fireEvent.click(wrapper.getByText("Add"))

    await act(async () => {
      render(<Users {...props} />);
    });
  })
})
