// src/components/ServiceCard.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ServiceCard = ({ icon, title, description }) => {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <Card ref={elementRef} className={isVisible ? 'visible' : ''}>
      <IconContainer>
        <GradientIcon icon={icon} size="3x" />
      </IconContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Card = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

const IconContainer = styled.div`
  margin-bottom: 1rem;
`;

const GradientIcon = styled(FontAwesomeIcon)`
  font-weight: bolder;
  color: #ff3f00;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  font-family: 'Satoshi', sans-serif;
`;

const Description = styled.p`
  font-size: 1rem;
  font-family: "Work Sans", sans-serif;
  color: #666;
`;

export default ServiceCard;



