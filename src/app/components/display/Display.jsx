import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import DisplayIcon from './DisplayIcon';
import DisplayResult from './DisplayResult';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Wrapper = styled.div`
  min-height: 30%;
  text-align: center;
  > * {
    animation: ${fadeIn} 1s;
  }
`;

const resultOperator = (result) => {
  if (result === 'Draw') return ' - ';
  if (result === 'Victory') return ' > ';
  return ' < ';
};

const Display = ({ children, humanChoice, computerChoice }) => (
  <Wrapper>
    <h2 key={children}>{/* Force remount if "children" changes to allow animation to fire */}
      {children}
    </h2>
    {(humanChoice && computerChoice) &&
    <Fragment>
      <DisplayIcon choice={humanChoice} />
      <span>
        {resultOperator(children)}
      </span>
      <DisplayIcon choice={computerChoice} />
      <DisplayResult
        result={children}
        humanChoice={humanChoice}
        computerChoice={computerChoice}
      />
    </Fragment>}
  </Wrapper>
);

Display.propTypes = {
  children: PropTypes.string.isRequired,
  humanChoice: PropTypes.oneOf(['rock', 'paper', 'scissors', '']).isRequired,
  computerChoice: PropTypes.oneOf(['rock', 'paper', 'scissors', '']).isRequired,
};

export default Display;
