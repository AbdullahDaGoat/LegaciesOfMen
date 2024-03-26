import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbars from './Navigation';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pushAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LandingPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('../../public/image.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 165, 0, 0.5);
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1rem;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(3px);
`;



const WordsContainer = styled.div`
  background-color: rgba(255, 125, 0, 0.75);
  padding: 3rem;
  border-radius: 50px;
  backdrop-filter: blur(3px);
  z-index: 1;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out 0.5s forwards;
  max-width: 60%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 70%;
    padding: 2.5rem;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    padding: 2rem;
    border-radius: 30px;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 1.5rem;
    border-radius: 20px;
  }
`;

const Content = styled.div`
  text-align: center;
  color: black;
  font-size: 2.5rem;

  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;


const Word = styled.div`
  opacity: 0;
  animation: ${pushAnimation} 1s ease-in-out forwards;
  animation-delay: ${(props) => props.delay || '0s'};
  margin: 0 0.5rem;

  @media (max-width: 1200px) {
    margin: 0 0.4rem;
  }

  @media (max-width: 768px) {
    margin: 0 0.3rem;
  }

  @media (max-width: 480px) {
    margin: 0.2rem;
  }
`;

const LandingPage: React.FC = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  return (
    <LandingPageContainer className={animationStarted ? 'animate' : ''}>
        <Navbars/>
      <WordsContainer>
        <Content>
          <Line>
            <Word delay="0.2s">In</Word>
            <Word delay="0.4s">these</Word>
            <Word delay="0.6s">seats,</Word>
            <Word delay="0.8s">at</Word>
            <Word delay="1s">these</Word>
          </Line>
          <Line>
            <Word delay="1.2s">FOREVER-FREE meetings,</Word>
          </Line>
          <Line>
            <Word delay="1.6s">men's</Word>
            <Word delay="1.8s">lives</Word>
            <Word delay="2s">GREATLY</Word>
            <Word delay="2.2s">improve.</Word>
          </Line>
        </Content>
      </WordsContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;