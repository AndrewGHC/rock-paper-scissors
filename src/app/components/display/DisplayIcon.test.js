import React from 'react';
import test from 'ava';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DisplayIcon from './DisplayIcon';

configure({ adapter: new Adapter() });

test('when prop choice is "rock", returns a rock icon', (t) => {
  const wrapper = mount(<DisplayIcon choice="rock" />);
  t.true(wrapper.find('.fa-hand-rock').exists());
});

test('when prop choice is "paper", returns a paper icon', (t) => {
  const wrapper = mount(<DisplayIcon choice="paper" />);
  t.true(wrapper.find('.fa-hand-paper').exists());
});

test('when prop choice is "scissors", returns a scissors icon', (t) => {
  const wrapper = mount(<DisplayIcon choice="scissors" />);
  t.true(wrapper.find('.fa-hand-scissors').exists());
});
