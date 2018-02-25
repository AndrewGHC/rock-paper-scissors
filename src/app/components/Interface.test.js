import React from 'react';
import test from 'ava';
import td from 'testdouble';
import timers from 'testdouble-timers';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Interface from './Interface';
import Display from './display';
import RockPaperScissors from './RockPaperScissors';

configure({ adapter: new Adapter() });

test.beforeEach((t) => {
  timers.use(td);
  t.context = {
    clock: td.timers(),
    options: ['rock', 'paper', 'scissors'],
  };
});

test.afterEach(() => {
  td.reset();
});

test('renders Display with props from state', (t) => {
  const wrapper = shallow(<Interface />);
  const { display, humanChoice, computerChoice } = wrapper.state();
  const expectProps = {
    children: display,
    humanChoice,
    computerChoice,
  };
  t.deepEqual(wrapper.find(Display).props(), expectProps);
});

test('renders RockPaperScissors with props from state & handleClick method', (t) => {
  const wrapper = shallow(<Interface />);
  const expectProps = {
    handleClick: wrapper.instance().handleClick,
    disabled: wrapper.state('disabled'),
  };
  t.deepEqual(wrapper.find(RockPaperScissors).props(), expectProps);
});

test('when handleClick is called, 3, 2, 1 are passed as children to Display in increments of 1 second', (t) => {
  const { clock } = t.context;
  const wrapper = mount(<Interface />);
  const display = wrapper.find(Display);

  wrapper.instance().handleClick('rock');

  t.is(display.text(), '3');
  clock.tick(1000);
  t.is(display.text(), '2');
  clock.tick(1000);
  t.is(display.text(), '1');
});

test('when handleClick is called, after 3 seconds the result is displayed', (t) => {
  const { clock } = t.context;
  const wrapper = mount(<Interface />);
  const display = wrapper.find(Display);

  wrapper.instance().handleClick('rock');

  clock.tick(3000);

  const results = ['Draw', 'Victory', 'Defeat'];
  t.true(results.some(result => display.text().includes(result)));
});

test('when humanChoice is "rock" determineWinner returns correct result', (t) => {
  const { options } = t.context;
  const displaysWhenRock = ['Draw', 'Defeat', 'Victory'];
  const humanChoice = 'rock';

  options.forEach((computerChoice, i) => {
    const wrapper = mount(<Interface />);
    const results = wrapper.instance().determineWinner(humanChoice, computerChoice);
    const expected = {
      disabled: false,
      display: displaysWhenRock[i],
      countdownIndex: 0,
      humanChoice,
      computerChoice,
    };
    t.deepEqual(results, expected);
  });
});

test('when humanChoice is "paper" determineWinner returns correct result', (t) => {
  const { options } = t.context;
  const displaysWhenPaper = ['Victory', 'Draw', 'Defeat'];
  const humanChoice = 'paper';

  options.forEach((computerChoice, i) => {
    const wrapper = mount(<Interface />);
    const results = wrapper.instance().determineWinner(humanChoice, computerChoice);
    const expected = {
      disabled: false,
      display: displaysWhenPaper[i],
      countdownIndex: 0,
      humanChoice,
      computerChoice,
    };
    t.deepEqual(results, expected);
  });
});

test('when humanChoice is "scissors" determineWinner returns correct result', (t) => {
  const { options } = t.context;
  const displaysWhenPaper = ['Defeat', 'Victory', 'Draw'];
  const humanChoice = 'scissors';

  options.forEach((computerChoice, i) => {
    const wrapper = mount(<Interface />);
    const results = wrapper.instance().determineWinner(humanChoice, computerChoice);
    const expected = {
      disabled: false,
      display: displaysWhenPaper[i],
      countdownIndex: 0,
      humanChoice,
      computerChoice,
    };
    t.deepEqual(results, expected);
  });
});
