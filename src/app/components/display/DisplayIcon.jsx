import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '../../constants';

const renderIcon = (choice) => {
  const formatChoice = `${choice.charAt(0).toUpperCase()}${choice.slice(1)}`;
  return {
    faHandRock,
    faHandPaper,
    faHandScissors,
  }[`faHand${formatChoice}`];
};

const DisplayIcon = ({ choice }) => <FontAwesomeIcon icon={renderIcon(choice)} />;

DisplayIcon.propTypes = {
  choice: PropTypes.oneOf(['rock', 'paper', 'scissors']).isRequired,
};

export default DisplayIcon;
