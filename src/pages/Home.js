import React, { useState } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';
import PageSeparator from '../components/PageSeparator';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import background from '../assets/background.webp';
import logo from '../assets/falahbyte_solo.png';
import title_text from '../assets/title_text.png';
import sideImage from '../assets/sidepic1.png';
import sideImage2 from '../assets/sidepic2.png';
import { faDesktop, faMagnifyingGlass, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProjectShowcase from '../components/ProjectShowcase';
import { faSmile, faProjectDiagram, faClock, faMoneyBill1, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ThankYou from '../components/ThankYou'; // Import ThankYou component

const Home = () => {
  const [aboutImageRef, aboutImageVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [falahImageRef, falahImageVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., by sending data to your server
    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    })
      .then(response => {
        if (response.ok) {
          setFormSubmitted(true);
        } else {
          console.error('Form submission failed');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <Main>
      {formSubmitted ? (
        <ThankYou />
      ) : (
        <>
          <Element name="home">
            <HeroSection>
              <Overlay>
                <Content>
                  <TextContainer>
                    <TitleAndButtonWrapper>
                      <TitleImage src={title_text} alt="We Build Your Business. Get Guaranteed Results." />
                      <ScrollLink to="contact" smooth={true} duration={500}>
                        <CTAButton>Get Started</CTAButton>
                      </ScrollLink>
                    </TitleAndButtonWrapper>
                  </TextContainer>
                  <LogoContainer>
                    <Logo src={logo} alt="FalahByte Logo" />
                  </LogoContainer>
                </Content>
              </Overlay>
            </HeroSection>
          </Element>
          <PageSeparator />
          <Element name="about">
            <AboutSection>
              <TextContainer>
                <h2 style={{ fontFamily: 'Sora, sans-serif' }}>Bridging the Digital Divide for Businesses and Communities</h2>
                <p>
                  The world is more connected than ever before,
                  and a strong digital presence is essential for any business or organization to thrive. We at Falahbyte saw a gap between those with the drive and passion to make a difference and the tools they need to be seen and heard online.
                </p>
                <p>
                  Many businesses and communities,
                  particularly those focused on social good and cultural impact, lack the technical expertise to build a robust online presence. This can hinder their ability to connect with a broader audience, raise awareness for their causes, and ultimately achieve their goals.
                </p>
                <ButtonWrapper>
                  <ScrollLink to="falah" smooth={true} duration={500}>
                    <GradientButton1>
                      So What Should I do? <FontAwesomeIcon icon={faArrowRight} />
                    </GradientButton1>
                  </ScrollLink>
                </ButtonWrapper>
              </TextContainer>
              <AnimatedImageContainer ref={aboutImageRef} className={aboutImageVisible ? 'visible' : ''}>
                <SideImage src={sideImage} alt="Side Image" />
              </AnimatedImageContainer>
            </AboutSection>
          </Element>
          <Element name="falah">
            <FalahSection>
              <FalahImageContainer ref={falahImageRef} className={falahImageVisible ? 'visible' : ''}>
                <SideImage src={sideImage2} alt="Side Image" />
              </FalahImageContainer>
              <TextContainer>
                <h2 style={{ fontFamily: 'Sora, sans-serif' }}>Unlocking Digital Falah (Success): A Journey for Both Worlds</h2>
                <Blockquote>
                  <p>
                    "It is they who are ˹truly˺ guided by their Lord, and it is they who will be successful."
                  </p>
                  <cite>(Surah Al-Baqara, Verse 5)</cite>
                </Blockquote>
                <p>
                  Just as Allah (SWT) created a distinct path for each living being, FalahByte crafts unique web experiences and marketing strategies to guide your business to success. Let us be your partner in navigating the digital world.
                </p>
                <ButtonWrapper>
                  <ScrollLink to="success-engine" smooth={true} duration={500}>
                    <GradientButton2>
                      How Can I Be Successful? <FontAwesomeIcon icon={faArrowRight} />
                    </GradientButton2>
                  </ScrollLink>
                </ButtonWrapper>
              </TextContainer>
            </FalahSection>
          </Element>
          <Element name="success-engine">
            <SuccessEngineSection>
              <h2 style={{ fontFamily: 'Sora, sans-serif' }}>Introducing Your Success Engine</h2>
              <SuccessEngineList>
                <SuccessEngineCard>
                  <SuccessIconWrapper>
                    <img src={require('../assets/step1.png')} alt="Step 1" />
                  </SuccessIconWrapper>
                  <h3>You</h3>
                  <p>Elevate your online presence. We craft a website that showcases your brand, attracts new clients, and converts leads into sales.</p>
                  <p>Unlock your growth potential. Our experts analyze your marketing and identify opportunities to reach a wider audience.</p>
                </SuccessEngineCard>
                <SuccessEngineCard>
                  <SuccessIconWrapper>
                    <img src={require('../assets/step2.png')} alt="Step 2" />
                  </SuccessIconWrapper>
                  <h3>Us</h3>
                  <p>Become your trusted partner. We collaborate closely with you to understand your unique goals and challenges.</p>
                  <p>Unleash the power of technology. We leverage our expertise in web development and marketing to build a comprehensive strategy.</p>
                </SuccessEngineCard>
                <SuccessEngineCard>
                  <SuccessIconWrapper>
                    <img src={require('../assets/step3.png')} alt="Step 3" />
                  </SuccessIconWrapper>
                  <h3>Success</h3>
                  <p>Drive results, together. We measure progress and fine-tune our approach to ensure you achieve tangible results.</p>
                  <p>Celebrate your growth. We empower you to reach your full potential and dominate your online space.</p>
                </SuccessEngineCard>
              </SuccessEngineList>
              <ButtonWrapper>
                <ScrollLink to="services" smooth={true} duration={500}>
                  <GradientButton3>
                    So What Can You Do For Me? <FontAwesomeIcon icon={faArrowRight} />
                  </GradientButton3>
                </ScrollLink>
              </ButtonWrapper>
            </SuccessEngineSection>
          </Element>
          <Element name="services">
            <ServicesSection>
              <h2 style={{ fontFamily: 'Sora, sans-serif' }}>We Provide</h2>
              <ServiceList>
                <ServiceCard icon={faDesktop} title="Web Development" description="Craft a Website That Converts. Need a website that looks stunning and drives results? We build modern, responsive sites optimized for any device." />
                <ServiceCard icon={faMagnifyingGlass} title="SEO Optimization" description="Dominate Search & Get Found Online. Unleash the power of SEO. We'll elevate your website's ranking, bringing you more organic traffic and boosting your bottom line." />
                <ServiceCard icon={faBullhorn} title="Marketing Strategies" description="Crafting effective marketing plans for your business. We only win if you win. That's the basis for a good partnership. You won't carry all the risk, we'll share it." />
              </ServiceList>
              <ButtonWrapper>
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <GradientButton>
                    Join Our Journey To Success! <FontAwesomeIcon icon={faArrowRight} />
                  </GradientButton>
                </ScrollLink>
              </ButtonWrapper>
            </ServicesSection>
          </Element>
          <Element name="faq">
            <FAQ />
          </Element>
          <PageSeparator />
          <Element name="stats">
            <StatsSection>
              <h2 style={{ fontFamily: 'Sora, sans-serif' }}>What We Have Done So Far</h2>
              <StatsList>
                <StatCard>
                  <HappyClientsIcon>
                    <FontAwesomeIcon icon={faSmile} size="3x" />
                  </HappyClientsIcon>
                  <CountUp start={0} end={1} duration={2.75} delay={0}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h3 ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p>Happy Clients</p>
                </StatCard>
                <StatCard>
                  <ProjectsCompletedIcon>
                    <FontAwesomeIcon icon={faProjectDiagram} size="3x" />
                  </ProjectsCompletedIcon>
                  <CountUp start={0} end={1} duration={2.75} delay={0}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h3 ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p>Projects Completed</p>
                </StatCard>
                <StatCard>
                  <CharitiesDonatedIcon>
                    <FontAwesomeIcon icon={faMoneyBill1} size="3x" />
                  </CharitiesDonatedIcon>
                  <CountUp start={0} end={1} duration={2.75} delay={0}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h3 ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p>Charities Donated To</p>
                </StatCard>
                <StatCard>
                  <YearsOfExperienceIcon>
                    <FontAwesomeIcon icon={faClock} size="3x" />
                  </YearsOfExperienceIcon>
                  <CountUp start={0} end={1} duration={2.75} delay={0}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <h3 ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p>Years of Experience</p>
                </StatCard>
              </StatsList>
            </StatsSection>
          </Element>
          <Element name="project-showcase">
            <ProjectShowcase />
            <ButtonWrapper>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <GradientButton4>
                  Ready To Join? Let's Build Your Business. <FontAwesomeIcon icon={faArrowRight} />
                </GradientButton4>
              </ScrollLink>
            </ButtonWrapper>
          </Element>
          <PageSeparator />
          <Element name="contact">
            <ContactSection>
              <h2 style={{ fontFamily: 'Sora, sans-serif' }}>Contact Us</h2>
              <Form onSubmit={handleSubmit}>
                <Label>
                  Name:
                  <Input type="text" name="name" required />
                </Label>
                <Label>
                  Email:
                  <Input type="email" name="email" required />
                </Label>
                <Label>
                  Message:
                  <Textarea name="message" required />
                </Label>
                <Button type="submit">Submit</Button>
              </Form>
            </ContactSection>
          </Element>
        </>
      )}
    </Main>
  );
};

const Main = styled.main`
  padding: 2rem;
`;

const HeroSection = styled.section`
  position: relative;
  text-align: left;
  margin-bottom: 4rem;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Sora', sans-serif;
  padding: 0 1rem; /* Add padding for mobile view */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 2rem;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  flex: 2;
  
  margin-left: 2rem; /* Add left margin for spacing */

  h2 {
    font-family: 'Sora', sans-serif;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-family: "Work Sans", sans-serif;
    text-shadow: #121212;

    margin-bottom: 0;
  }

`;





const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 300px;
`;

const ServicesSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const ServiceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  margin-bottom: 4rem;
`;

const FalahSection = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 4rem;
  gap: 2rem;
`;

const AnimatedImageContainer = styled.div`
  flex: 1;
  max-width: 30%;
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FalahImageContainer = styled.div`
  flex: 1;
  max-width: 30%;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SideImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Work Sans", sans-serif;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: "Ubuntu Mono", monospace;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: linear-gradient(90deg, #29f19c, #02a1f9);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #02a1f9, #29f19c);
  }
`;

const TitleAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleImage = styled.img`
  display: block;
  margin-bottom: 1rem;
  width: auto;
  max-width: 100%;
  height: auto;
  margin-left: -79px;
`;


const CTAButton = styled.button`
  padding: 1rem 2rem;
  margin-top: 2rem;
  background: linear-gradient(90deg, #29f19c, #02a1f9);
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.5rem;
  font-family: 'Sora', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #02a1f9, #29f19c);
  }
`;

const Blockquote = styled.blockquote`
  padding: 1rem;
  border-left: 4px solid #4c9f70;
  background-color: #f9f9f9;
  margin: 0 0 1rem;
  font-style: italic;

  p {
    margin: 0;
  }

  cite {
    display: block;
    margin-top: 1rem;
    font-size: 0.9rem;
    text-align: right;
    color: #666;
  }
`;


const SuccessEngineSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem;

  
`;

const SuccessEngineList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  
`;

const SuccessEngineCard = styled.div`
  flex: 1;
  max-width: 400px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;  

  h3 {
    font-family: 'Sora', sans-serif;
    margin-top: 1rem;
  }

  p {
    font-family: "Work Sans", sans-serif;
    margin-top: 0.5rem;
  }
`;

// For the Success Engine section
const SuccessIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  

  img {
    max-width: 80%;
    max-height: 80%;
  }
`;

// For the Stats section with gradients
const StatsIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border: 4px solid #ccc;
  border-radius: 70%;
  overflow: hidden;
  margin-bottom: 1rem; /* Add space between the image and the title */
  background: ${props => props.gradient};
`;

const HappyClientsIcon = styled(StatsIconWrapper)`
  background: linear-gradient(90deg,  #fcfc62, #eee82c);
  color: #fff;
  text-shadow: 1px 6px rgba(255,0,0,.5);
  
`;

const ProjectsCompletedIcon = styled(StatsIconWrapper)`
  background: linear-gradient(90deg, #FF6700, #f94029);
  color: #fff;
  text-shadow: 1px 6px rgba(255,0,0,.5);
`;

const CharitiesDonatedIcon = styled(StatsIconWrapper)`
  background: linear-gradient(90deg, #87FF65, #02f982);
  color: #fff;
  text-shadow: 1px 6px rgba(255,0,0,.5);
`;

const YearsOfExperienceIcon = styled(StatsIconWrapper)`
  background: linear-gradient(90deg, #297ff9, #6EA4BF);
  color: #fff;
  text-shadow: 1px 6px rgba(255,0,0,.5);
`;




const StatsSection = styled.section`
  text-align: center;
  margin-bottom: 4rem;
  padding: 2rem;

  
`;

const StatsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

`;

const StatCard = styled.div`
  flex: 1;
  max-width: 300px;
  padding: 1rem;


  text-align: center;

  h3 {
    font-family: 'Sora', sans-serif;
    margin-top: 1rem;
  }

  p {
    margin-top: 0.5rem;
    font-family: "Work Sans", sans-serif;
  }
`;


const GradientButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #29f19c, #02a1f9);
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Sora', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;
  margin-top: 2rem; /* Add gap above the button */

  &:hover {
    background: linear-gradient(90deg, #02a1f9, #29f19c);
  }
`;

const GradientButton1 = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #ea7317, #fec601);
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Sora', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;
  margin-top: 2rem; /* Add gap above the button */

  &:hover {
    background: linear-gradient(90deg, #fec601, #ea7317);
  }
`;

const GradientButton2 = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #9f86c0, #5863f8);
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Sora', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;
  margin-top: 2rem; /* Add gap above the button */

  &:hover {
    background: linear-gradient(90deg, #5863f8, #9f86c0);
  }
`;


const GradientButton3 = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #912f56, #ff66d8);
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Sora', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;
  margin-top: 2rem; /* Add gap above the button */

  &:hover {
    background: linear-gradient(90deg, #ff66d8, #912f56);
  }
`;


const GradientButton4 = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #065143, #70b77e);
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-family: 'Sora', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;
  margin-top: 2rem; 

  &:hover {
    background: linear-gradient(90deg, #70b77e, #065143);
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;





export default Home;
