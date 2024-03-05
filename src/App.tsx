import { useEffect, useState } from 'react';
import Preloader from "./components/preloader"
import LandingPage from './components/LandingPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isLoading ? <Preloader /> : <LandingPage />}
    </div>
  );
};

export default App;