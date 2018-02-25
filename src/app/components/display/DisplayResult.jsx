import React from 'react';
import PropTypes from 'prop-types';

const formatString = (humanChoice, computerChoice) =>
  result => `Your ${humanChoice} ${result} ${computerChoice}!`;

const getResult = (result, humanChoice, computerChoice) => {
  const formatted = formatString(humanChoice, computerChoice);
  switch (result) {
    case 'Draw': return formatted('draws with');
    case 'Victory': return formatted('beats');
    case 'Defeat': return formatted('loses to');
    default: return '';
  }
};

const DisplayResult = ({ result, humanChoice, computerChoice }) =>
  <p>{getResult(result, humanChoice, computerChoice)}</p>;

DisplayResult.propTypes = {
  result: PropTypes.oneOf(['Draw', 'Victory', 'Defeat']).isRequired,
  humanChoice: PropTypes.oneOf(['rock', 'paper', 'scissors']).isRequired,
  computerChoice: PropTypes.oneOf(['rock', 'paper', 'scissors']).isRequired,
};

export default DisplayResult;
