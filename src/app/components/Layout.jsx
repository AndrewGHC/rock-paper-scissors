import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  COLOUR_PRIMARY,
  COLOUR_OFF_WHITE,
  COLOUR_OFF_BLACK,
} from '../constants';

const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  min-width: 100vw;
`;

const LayoutHeader = styled.header`
  align-items: center;
  background-color: ${COLOUR_PRIMARY};
  box-shadow: 0px 0px 5px 3px rgba(179,177,179,1);
  color: ${COLOUR_OFF_WHITE};
  display: flex;
  flex: 0;
  justify-content: center;
  width: 100%;
  z-index: 1;
`;

const LayoutMain = styled.main`
  color: ${COLOUR_OFF_BLACK};
  background-color: ${COLOUR_OFF_WHITE};
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 1em;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <LayoutHeader>
      <h1>
        Rock Paper Scissors
      </h1>
    </LayoutHeader>
    <LayoutMain>
      {children}
    </LayoutMain>
  </LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
