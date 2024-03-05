import React from 'react';
import styled from 'styled-components';

const BackgroundImage = () => (
  <image src={'../public/background.jpg'} alt="Background Image" />
);

const BlurredBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../public/background.jpg');
  background-size: cover;
  filter: blur(5px);
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const FadingText = styled.span`
  animation: fadeInLeft 2s ease-in-out both;
`;

const LandingPage = () => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    const timeouts = [];
    const addText = (word) => {
      setTimeout(() => {
        setText((prevText) => `${prevText} ${word}`);
      }, timeouts.shift());
    };
    timeouts.push(100);
    timeouts.push(200);
    timeouts.push(300);
    timeouts.push(400);
    timeouts.push(500);
    addText('It');
    addText('these');
    addText('seats');
    addText('at');
    addText('these');
    addText('FOREVER-FREE');
    addText('meetings');
    addText('men\'s');
    addText('lives');
    addText('GREATLY');
    addText('improve');
  }, []);

  return (
    <div>
      <BackgroundImage />
      <BlurredBackground>
        <TextContainer>
          <FadingText>{text}</FadingText>
        </TextContainer>
      </BlurredBackground>
    </div>
  );
};

export default LandingPage;