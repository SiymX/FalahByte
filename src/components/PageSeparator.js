// src/components/PageSeparator.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircle, faSquare } from '@fortawesome/free-solid-svg-icons';

const PageSeparator = () => {
  return (
    <SeparatorContainer>
      <SeparatorLine />
      <IconWrapper>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faSquare} />
      </IconWrapper>
      <SeparatorLine />
    </SeparatorContainer>
  );
};

const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

const SeparatorLine = styled.div`
  flex: 1;
  height: 2px;
  background-color: #ccc;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 1rem;

  svg {
    color: #007BFF; /* Adjust color as needed */
  }
`;

export default PageSeparator;
