import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import {
  faHandRock,
  faHandPaper,
  faHandScissors,
  COLOUR_PRIMARY,
  COLOUR_SECONDARY,
  COLOUR_OFF_BLACK,
} from '../constants';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 5em;
  box-sizing: border-box;
  color: ${({ disabled }) => (disabled ? COLOUR_SECONDARY : COLOUR_OFF_BLACK)};
  ${({ disabled }) => !disabled && `
    > * {
      :hover {
        cursor: pointer;
        color: ${COLOUR_PRIMARY};
      }
    }
  `}
`;

const RockPaperScissors = ({ handleClick, disabled }) => (
  <Wrapper disabled={disabled}>
    <FontAwesomeIcon
      onClick={() => !disabled && handleClick('rock')}
      size="4x"
      icon={faHandRock}
      border
    />
    <FontAwesomeIcon
      onClick={() => !disabled && handleClick('paper')}
      size="4x"
      icon={faHandPaper}
      border
    />
    <FontAwesomeIcon
      onClick={() => !disabled && handleClick('scissors')}
      size="4x"
      icon={faHandScissors}
      border
    />
  </Wrapper>
);

RockPaperScissors.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default RockPaperScissors;
