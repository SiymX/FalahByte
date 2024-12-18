import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ProjectShowcase = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  
    const projects = [
      { src: require('../assets/project1.png'), link: 'https://www.adviser.siym.me' },
      { src: require('../assets/project2.png'), link: 'https://www.bookstoreprj.siym.me' },
      { src: require('../assets/project3.png'), link: 'https://www.stickrr.siym.me' },
      // Add more projects as needed
    ];
  
    return (
      <ShowcaseWrapper>
        <TitleWrapper>
          <h2>Thriving Together</h2>
          <p>Join a collaborative network where success is shared.</p>
        </TitleWrapper>
        <SliderWrapper>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.src} alt={`Project ${index + 1}`} />
                </a>
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </ShowcaseWrapper>
    );
  }
  
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Arrow className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Arrow>
    );
  }
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Arrow className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Arrow>
    );
  }
  
  const ShowcaseWrapper = styled.div`
    padding: 2rem 0; 
    text-align: center; 
    

  `;
  
  const TitleWrapper = styled.div`
    margin-bottom: 2rem; 
    
    h2 {
      font-family: 'Sora', sans-serif;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
  
    p {
      font-family: 'Sora', sans-serif;
      font-size: 1rem;
      color: #666;
    }
  `;

const SliderWrapper = styled.div`
  padding: 2rem 0; 
  .slick-slide img {
    display: block;
    margin: auto;
    max-width: 50%;  
    max-height: 200px; 
    object-fit: contain; 
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .slick-prev, .slick-next {
    z-index: 1;
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #bbb;
  }

  .slick-dots li.slick-active button:before {
    color: #000;
  }
`;

const Arrow = styled.div`
  &.slick-prev {
    left: -25px;
  }

  &.slick-next {
    right: -25px;
  }

  & svg {
    font-size: 1.5rem;
    color: #000;
  }
`;

export default ProjectShowcase;
