
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Projects from "../projects/index";


describe('<Projects /> tests', () => {
  const mockStore = configureStore();
  let store;
  beforeEach(() => {
    // creates the store with any initial state or middleware needed
    store = mockStore({
      projects: {},
    });
  });
  it('should render the form', () => {
    const wrapper = shallow((
      <Projects store={store}>
        <form/>
      </Projects>
    ));
  expect(wrapper.contains(<form/>)).toEqual(true);
  });
  it('should render the button',()=>{
    const wrapper = shallow(<Projects store={store}><button /></Projects>);
    expect(wrapper.contains(<button/>)).toEqual(true);
  });
  it('should render the table',()=>{
    const wrapper = shallow(<Projects store={store}><table /></Projects>);
    expect(wrapper.contains(<table/>)).toEqual(true);
  });
});