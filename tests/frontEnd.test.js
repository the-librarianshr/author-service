import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { waitForState } from 'enzyme-async-helpers';
import Author from '../client/author.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Author id={5} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App content', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Author id={5} />);
  });
  it('loads author name', async () => {
    await waitForState(wrapper, state => state.firstName !== null);
    expect(wrapper.state('firstName')).not.toEqual(null);
    expect(wrapper.state('lastName')).not.toEqual(null);
  });

  it('loads author image src', async () => {
    await waitForState(wrapper, state => state.firstName !== null);
    expect(wrapper.state('avatar')).not.toEqual(null);
  });

  it('loads number of followers', async () => {
    await waitForState(wrapper, state => state.firstName !== null);
    expect(wrapper.state('followers')).not.toEqual(null);
  });

  it('loads a bio', async () => {
    await waitForState(wrapper, state => state.firstName !== null);
    expect(wrapper.state('bio')).not.toEqual(null);
    expect(wrapper.state('truncBio')).not.toEqual(null);
    expect(wrapper.state('truncBio').length).toEqual(183);
    expect(wrapper.state('fullBio')).not.toEqual(null);
  });
});

describe('App behavior', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Author id={5} />);
  });
  it('More button expands bio', async () => {
    await waitForState(wrapper, state => state.firstName !== null);
    expect(wrapper.find('.bio').text()).toEqual(wrapper.state('truncBio') + ' More');
    wrapper.find('#more-btn').simulate('click');
    expect(wrapper.find('.bio').text()).toEqual(wrapper.state('fullBio'));
  });
});