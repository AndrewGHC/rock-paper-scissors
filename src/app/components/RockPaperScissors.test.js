import React from 'react';
import test from 'ava';
import td from 'testdouble';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import RockPaperScissors from './RockPaperScissors';

configure({ adapter: new Adapter() });

test.beforeEach((t) => {
  t.context.props = {
    handleClick: td.function(),
    disabled: false,
  };
});

test('renders three SVG elements', (t) => {
  const { props } = t.context;
  const wrapper = shallow(<RockPaperScissors {...props} />);
  t.is(wrapper.children().length, 3);
});

test('when the rock icon is clicked calls handleClick with "rock"', (t) => {
  const { props } = t.context;
  const wrapper = mount(<RockPaperScissors {...props} />);
  const rockIcon = wrapper.find('.fa-hand-rock');
  rockIcon.simulate('click');
  td.verify(props.handleClick('rock'));
  t.pass();
});

test('when the paper icon is clicked calls handleClick with "paper"', (t) => {
  const { props } = t.context;
  const wrapper = mount(<RockPaperScissors {...props} />);
  const paperIcon = wrapper.find('.fa-hand-paper');
  paperIcon.simulate('click');
  td.verify(props.handleClick('paper'));
  t.pass();
});

test('when the scissors icon is clicked calls handleClick with "scissors"', (t) => {
  const { props } = t.context;
  const wrapper = mount(<RockPaperScissors {...props} />);
  const scissorsIcon = wrapper.find('.fa-hand-scissors');
  scissorsIcon.simulate('click');
  td.verify(props.handleClick('scissors'));
  t.pass();
});

test('clicking an icon does not call handleClick when disabled is true', (t) => {
  const { props } = t.context;
  const wrapper = mount(<RockPaperScissors {...props} disabled />);
  wrapper.find('svg').forEach((icon) => {
    icon.simulate('click');
  });
  td.verify(props.handleClick(td.matchers.anything), { times: 0 });
  t.pass();
});
