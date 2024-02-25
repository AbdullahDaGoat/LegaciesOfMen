import { useEffect, useState } from 'react';
import styled from 'styled-components';

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column; /* Added */
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 9999;
`;

const ProgressBar = styled.div`
  position: relative;
  width: 200px;
  height: 20px;
  background-color: white;
  border-radius: 5px; /* Set border-radius to 0 */
  margin-top: 10px;
`;

const ProgressBarFill = styled.div<{ width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => (props.width >= 100 ? '100%' : `${props.width}%`)};
  background-color: orange;
  border-radius: 0; /* Set border-radius to 0 */
  transition: width 0.5s ease-in-out;
`;

const QuoteContainer = styled.div`
  color: orange;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px; /* Added */
`;

const AuthorContainer = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
`;

const Preloader = () => {
  const [width, setWidth] = useState(0);
  const [showLabel, setShowLabel] = useState(false);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchRandomQuote = async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    };

    fetchRandomQuote();

    const interval = setInterval(() => {
      setWidth(prevWidth => {
        const newWidth = prevWidth + 2;
        return newWidth >= 100 ? 100 : newWidth;
      });
    }, 50);

    const labelTimeout = setTimeout(() => {
      setShowLabel(true); // Show the label after 1 second
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(labelTimeout);
    };
  }, []);

  return (
    <PreloaderContainer>
      {showLabel && (
        <>
          <QuoteContainer>{quote}</QuoteContainer>
          <AuthorContainer>- {author}</AuthorContainer>
        </>
      )}
      <ProgressBar>
        <ProgressBarFill width={width} />
      </ProgressBar>
    </PreloaderContainer>
  );
};

export default Preloader;