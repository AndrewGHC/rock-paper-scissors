import React, { Component } from 'react';
import styled from 'styled-components';

import Display from './display';
import RockPaperScissors from './RockPaperScissors';

const InterfaceWrapper = styled.div`
  box-shadow: 0px 0px 10px 5px rgba(179,177,179,1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 50vw;
  @media (max-width: 1024px) {
    width: 90vw;
  }
`;

export default class Interface extends Component {
  constructor() {
    super();
    this.defaultState = {
      disabled: false,
      display: 'Click below to play!',
      countdownIndex: 0,
      humanChoice: '',
      computerChoice: '',
    };
    this.state = { ...this.defaultState };
    this.handleClick = this.handleClick.bind(this);
    this.countdown = ['3', '2', '1'];
  }

  determineWinner(humanChoice, computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]) {
    const choices = { humanChoice, computerChoice };
    const draw = { ...this.defaultState, ...choices, display: 'Draw' };
    const victory = { ...this.defaultState, ...choices, display: 'Victory' };
    const defeat = { ...this.defaultState, ...choices, display: 'Defeat' };

    if (humanChoice === computerChoice) return draw;

    switch (humanChoice) {
      case 'rock': {
        if (computerChoice === 'scissors') return victory;
        break;
      }
      case 'paper': {
        if (computerChoice === 'rock') return victory;
        break;
      }
      case 'scissors': {
        if (computerChoice === 'paper') return victory;
        break;
      }
      default:
    }

    return defeat;
  }

  handleClick(humanChoice) {
    const performCountdown = (countdown) => {
      this.setState(({ countdownIndex }) => {
        if (!countdown[countdownIndex]) {
          return {
            ...this.determineWinner(humanChoice),
            disabled: false,
          };
        }

        setTimeout(() => performCountdown(countdown), 1000);
        return {
          ...this.defaultState,
          display: countdown[countdownIndex],
          countdownIndex: countdownIndex + 1,
          disabled: true,
        };
      });
    };

    performCountdown(this.countdown);
  }

  render() {
    const {
      display,
      disabled,
      humanChoice,
      computerChoice,
    } = this.state;
    return (
      <InterfaceWrapper>
        <Display humanChoice={humanChoice} computerChoice={computerChoice}>
          {display}
        </Display>
        <RockPaperScissors handleClick={this.handleClick} disabled={disabled} />
      </InterfaceWrapper>
    );
  }
}
