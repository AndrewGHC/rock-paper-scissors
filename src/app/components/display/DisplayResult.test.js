import React from 'react';
import test from 'ava';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DisplayResult from './DisplayResult';

configure({ adapter: new Adapter() });

test.beforeEach((t) => {
  t.context = {
    props: {
      humanChoice: 'rock',
      computerChoice: 'rock',
    },
    expectString: (result, humanChoice, computerChoice) => `Your ${humanChoice} ${result} ${computerChoice}!`,
  };
});

test('when prop result is "Draw", returns correct string', (t) => {
  const { props, expectString } = t.context;
  const wrapper = shallow(<DisplayResult {...props} result="Draw" />);
  t.is(wrapper.text(), expectString('draws with', props.humanChoice, props.computerChoice));
});

test('when prop result is "Victory", returns correct string', (t) => {
  const { props, expectString } = t.context;
  const wrapper = shallow(<DisplayResult {...props} result="Victory" />);
  t.is(wrapper.text(), expectString('beats', props.humanChoice, props.computerChoice));
});

test('when prop result is "Defeat", returns correct string', (t) => {
  const { props, expectString } = t.context;
  const wrapper = shallow(<DisplayResult {...props} result="Defeat" />);
  t.is(wrapper.text(), expectString('loses to', props.humanChoice, props.computerChoice));
});
