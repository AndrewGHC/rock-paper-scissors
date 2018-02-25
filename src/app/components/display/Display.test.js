import React from 'react';
import test from 'ava';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Display from './Display';
import DisplayResult from './DisplayResult';

configure({ adapter: new Adapter() });

test.beforeEach((t) => {
  t.context = {
    props: {
      humanChoice: '',
      computerChoice: '',
    },
    text: 'Draw',
  };
});


test('renders children under a h2 element', (t) => {
  const { props, text } = t.context;
  const wrapper = mount(
    <Display {...props}>
      {text}
    </Display>,
  );
  t.is(wrapper.find('h2').text(), text);
});

test('renders DisplayResult when "humanChoice" and "computerChoice" are truthy', (t) => {
  const { text } = t.context;
  const wrapper = mount(
    <Display
      humanChoice="rock"
      computerChoice="rock"
    >
      {text}
    </Display>,
  );
  t.true(wrapper.find(DisplayResult).exists());
});

test('does not render DisplayResult when "humanChoice" is not truthy', (t) => {
  const { props, text } = t.context;
  const wrapper = mount(
    <Display
      {...props}
      humanChoice="rock"
    >
      {text}
    </Display>,
  );
  t.false(wrapper.find(DisplayResult).exists());
});

test('does not render DisplayResult when "computerChoice" is not truthy', (t) => {
  const { props, text } = t.context;
  const wrapper = mount(
    <Display
      {...props}
      computerChoice="rock"
    >
      {text}
    </Display>,
  );
  t.false(wrapper.find(DisplayResult).exists());
});

test('renders "humanChoice" as an icon when "humanChoice" and "computerChoice" are truthy', (t) => {
  const { text } = t.context;
  const humanChoice = 'rock';
  const wrapper = mount(
    <Display
      humanChoice={humanChoice}
      computerChoice="paper"
    >
      {text}
    </Display>,
  );
  t.true(wrapper.find(`.fa-hand-${humanChoice}`).exists());
});

test('renders "computerChoice" as an icon when "humanChoice" and "computerChoice" are truthy', (t) => {
  const { text } = t.context;
  const computerChoice = 'rock';
  const wrapper = mount(
    <Display
      humanChoice="paper"
      computerChoice={computerChoice}
    >
      {text}
    </Display>,
  );
  t.true(wrapper.find(`.fa-hand-${computerChoice}`).exists());
});
