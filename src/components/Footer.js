// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import pythonIcon from '../assets/pythonicon.png';
import reactIcon from '../assets/reacticon.png';
import nodejsIcon from '../assets/nodejsicon.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <SectionTitle>Navigation</SectionTitle>
        <NavList>
        <NavItem>
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </NavItem>
          <NavItem>
            <ScrollLink to="about" smooth={true} duration={500}>
              What We Do
            </ScrollLink>
          </NavItem>
          <NavItem>
            <ScrollLink to="services" smooth={true} duration={500}>
              Services
            </ScrollLink>
          </NavItem>
        
          <NavItem>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </NavItem>

        <NavItem>
          <Link to="/guides">Guides</Link>
        </NavItem>
        </NavList>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Contact Information</SectionTitle>
        <ContactInfo>
          <p>📧 EMAIL: contact@falahbyte.com</p>
          <p>🇺🇸 LOCATION: Philadelphia, PA, United States of America</p>
        </ContactInfo>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Recommendations</SectionTitle>
        <p style={{ fontSize: '0.9rem' }}>
          <Link style={{ fontFamily: 'Ubuntu Mono, monospace', textDecoration: 'none', color: '#ecf0f1' }} to="/recommendations">Recommended Tools and Hosting</Link>
        </p>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Find Us On</SectionTitle>
        <SocialIcons>
          <SocialIcon href="https://www.facebook.com/profile.php?id=61560061762934" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/falahbyte/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </SocialIcon>
          <SocialIcon href="https://x.com/FalahByte" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </SocialIcon>
          <SocialIcon href="https://www.youtube.com/@FalahByte" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </SocialIcon>
        </SocialIcons>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Tools Used</SectionTitle>
        <IconList>
          <Icon src={reactIcon} alt="React" />
          <Icon src={pythonIcon} alt="Python" />
          <Icon src={nodejsIcon} alt="Node.js" />
        </IconList>
      </FooterSection>
      <Copyright>Copyright &copy; {new Date().getFullYear()} FalahByte. All rights reserved.</Copyright>
   
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #121212;
  color: #ecf0f1;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: left;

`;

const FooterSection = styled.div`
  flex: 1;
  margin: 1rem;
  min-width: 200px;
`;

const SectionTitle = styled.h3`
  border-bottom: 1px solid #ecf0f1;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Lora', serif;

 
`;


const NavList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1rem;
  
`;

const NavItem = styled.li`
  margin-bottom: 0.2rem;
  a {
    color: #ecf0f1;
    font-family: "Ubuntu Mono", monospace;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const ContactInfo = styled.div`
  p {
    margin: 0.3rem 0;
    font-family: "Ubuntu Mono", monospace;
  }
  font-size: 0.9rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1rem;
`;

const SocialIcon = styled.a`
  color: #ecf0f1;
  transition: color 0.3s ease;
  &:hover {
    color: #16db93;
  }
`;

const IconList = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
  &:hover {
    filter: grayscale(0%);
  }
`;

const Copyright = styled.p`
  text-align: center;
  width: 100%;
  margin-top: 2rem;
  border-top: 1px solid #ecf0f1;
  padding-top: 1rem;
  font-size: 0.7rem;
  font-family: "Ubuntu Mono", monospace;
`;

export default Footer;
