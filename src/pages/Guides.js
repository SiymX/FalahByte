import React, { useState } from 'react';
import styled from 'styled-components';
import guideImage from '../assets/linkedinguide.png'; // Example image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Guides = () => {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const guides = [
    {
      id: 1,
      title: 'Linkedin Ads Guide',
      description: 'This guide explains how LinkedIn Ads offer a powerful, yet often underutilized, opportunity for B2B businesses to precisely target and reach their ideal clients, maximizing ROI and minimizing wasted ad spend. The guide provides strategies to automate and optimize LinkedIn Ads for effective results, including eye-catching visuals, compelling headlines, concise copy, and a clear call-to-action to ensure the best performance and lead generation.',
      image: guideImage,
    },

  ];

  const handleGetGuide = (guide) => {
    setSelectedGuide(guide);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEmail('');
  };

  const handleSendGuide = () => {
    fetch('/get-guide', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        guideId: selectedGuide.id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setIsSuccessModalOpen(true);
        } else {
          alert('An error occurred. Please try again.');
        }
        handleCloseModal();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
        handleCloseModal();
      });
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <>
      <Header>
        <h1>Guides</h1>
        <Subtitle>All your guides listed here</Subtitle>
      </Header>
      <GuideContainer>
        {guides.map((guide) => (
          <GuideCard key={guide.id}>
            <GuideImage src={guide.image} alt={guide.title} />
            <GuideTitle>{guide.title}</GuideTitle>
            <GuideDescription>{guide.description}</GuideDescription>
            <GuideButton onClick={() => handleGetGuide(guide)}>Get it</GuideButton>
          </GuideCard>
        ))}
        {isModalOpen && (
          <Modal>
            <ModalContent>
              <h2>Get {selectedGuide.title}</h2>
              <p>Unlock this exclusive content and dive deeper! In this free guide we tell you how to do exactly that. No technical mumbling, just an easy to follow step-by-step overview of exactly what to do.</p>
              <p>Enter your email to receive the guide:</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
              />
              <ModalActions>
                <ModalButton onClick={handleSendGuide}>Send</ModalButton>
                <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
              </ModalActions>
            </ModalContent>
          </Modal>
        )}
        {isSuccessModalOpen && (
          <Modal>
            <ModalContent>
              <FontAwesomeIcon icon={faCheckCircle} size="4x" color="#16db93" />
              <h2>Guide Sent Successfully!</h2>
              <p>Please check your spam folder if you cannot find it in your inbox.</p>
              <ModalActions>
                <ModalButton onClick={handleCloseSuccessModal}>Close</ModalButton>
              </ModalActions>
            </ModalContent>
          </Modal>
        )}
      </GuideContainer>
    </>
  );
};

const Header = styled.div`
  text-align: center;
  margin: 2rem 0;

  h1 {
    font-family: 'Sora', sans-serif;
    font-size: 2.5rem;
    color: #333;
  }
`;

const Subtitle = styled.p`
  font-family: 'Sora', sans-serif;
  font-size: 1.2rem;
  color: #666;
`;

const GuideContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 6rem 2rem 2rem 2rem; /* Added top padding to account for the fixed navbar */

`;

const GuideCard = styled.div`
  background: white;
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 6px;
  }

  h3 {
    font-size: 1.4rem;
    margin: 1rem 0;
    color: #333;
    font-family: 'Sora', serif;
  }

  p {
    font-size: 1rem;
    color: #666;
    font-family: 'Inter', serif;
  }

  button {
    background-color: #16db93;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #14c383;
      transform: translateY(-3px);
    }
  }
`;

const GuideImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
`;

const GuideTitle = styled.h3`
  font-size: 1.4rem;
  margin: 1rem 0;
  color: #333;
  font-family: 'Sora', sans-serif;
`;

const GuideDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const GuideButton = styled.button`
  background-color: #16db93;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #14c383;
    transform: translateY(-3px);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      background: rgba(0, 0, 0, 0);
    }
    to {
      background: rgba(0, 0, 0, 0.7);
    }
  }
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 500px;
  animation: slideIn 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1);
    }
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
    font-family: 'Sora', sans-serif;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #666;
    font-family: 'Manrope', serif;
  }

  input {
    font-family: 'Manrope', serif;
    padding: 0.75rem;
    border-radius: 6px;
    border: 1px solid #ddd;
    width: 80%;
    max-width: 300px;
    margin-bottom: 1rem;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #16db93;
      outline: none;
    }
  }
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
`;

const ModalButton = styled.button`
  background-color: #16db93;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 1rem;
  font-family: 'Work Sans', sans-serif;

  &:hover {
    background-color: #14c383;
    transform: translateY(-3px);
  }
`;

const CancelButton = styled.button`
  background-color: #ccc;
  color: black;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-size: 1rem;
  font-family: 'Work Sans', sans-serif;

  &:hover {
    background-color: #bbb;
    transform: translateY(-3px);
  }
`;

export default Guides;
