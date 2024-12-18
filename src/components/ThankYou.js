import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ThankYou = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {!isComplete ? (
        <Circle />
      ) : (
        <SmileyFace>
          <Smiley>😊</Smiley>
          <Message>Thank you! We will get back to you shortly.</Message>
        </SmileyFace>
      )}
    </Container>
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid #29f19c;
  border-top: 10px solid #02a1f9;
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
`;

const SmileyFace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Smiley = styled.div`
  font-size: 100px;
`;

const Message = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #333;
`;

export default ThankYou;
