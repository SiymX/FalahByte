// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/falahbyte.png'; // Correct path to the new logo image


const Navbar = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
      <Nav>
        <LogoContainer>
          <Link to="/">
            <Logo src={logo} alt="FalahByte Logo" />
          </Link>
        </LogoContainer>
        <Hamburger onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuItem>
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink to="about" smooth={true} duration={500}>
              What We Do
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink to="services" smooth={true} duration={500}>
              Services
            </ScrollLink>
          </MenuItem>
          <MenuItem>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </MenuItem>
        </Menu>
      </Nav>
      <ScrollButton onClick={scrollTop} show={showScroll}>
        <FontAwesomeIcon icon={faChevronUp} />
      </ScrollButton>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121212;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000; /* Ensures the navbar is always on top */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #121212;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1001; /* Ensures the menu is above other components */
  }
`;

const MenuItem = styled.li`
  font-size: 1rem;
  color: #fff;
`;

const ScrollButton = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 50px;
  left: 50px;
  background-color: #3e8914;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ show }) => (show ? '1' : '0')};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  z-index: 1000;

  &:hover {
    background-color: #96e072;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export default Navbar;
