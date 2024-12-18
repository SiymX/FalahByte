// src/pages/Recommendations.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/falahbyte.png'; 

const Recommendations = () => {
  return (
    <Main>
      <Section>
        <Title>Website Hosting</Title>
        <Recommendation>
          <Name><a href="https://www.namecheap.com/" target="_blank" rel="noopener noreferrer">Namecheap</a></Name>
          <Description>
            Namecheap is well known for its affordable domain registration and reliable shared hosting services. Their domain services are cost-effective and offer various features like privacy protection and DNS management. Their shared hosting plans provide excellent uptime, free SSL certificates, and 24/7 customer support. Namecheap is a great choice for those looking to start a website on a budget without compromising on quality.
          </Description>
        </Recommendation>
      </Section>
      <Section>
        <Title>E-Commerce</Title>
        <Recommendation>
          <Name><a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">Stripe</a></Name>
          <Description>
            Stripe is one of the best payment gateways available, known for its easy integration and wide range of features. It supports various payment methods and currencies, making it ideal for businesses of all sizes.
          </Description>
        </Recommendation>
        <Recommendation>
          <Name><a href="https://www.moolah.cc/" target="_blank" rel="noopener noreferrer">Moolah</a></Name>
          <Description>
            Moolah offers great rates and no extra fees. They integrate with Authorize.net and cover monthly fees, providing a cost-effective solution for merchant services.
          </Description>
        </Recommendation>
        <Recommendation>
          <Name><a href="https://www.2checkout.com/" target="_blank" rel="noopener noreferrer">2Checkout</a></Name>
          <Description>
            2Checkout is known for its international support and versatility. It's a popular choice for businesses looking to accept payments globally.
          </Description>
        </Recommendation>
      </Section>
    </Main>
  );
};

const Main = styled.main`
  padding: 2rem;

`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h2`

  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'Sora', sans-serif;
`;

const Recommendation = styled.div`
  margin-bottom: 1.5rem;
`;

const Name = styled.h3`
  
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  a {
    font-family: 'Lora', serif;
    text-decoration: none;
    color: #065143;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: "Work Sans", sans-serif;
`;

export default Recommendations;
