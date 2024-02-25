import { useEffect, useState } from 'react';
import Preloader from './components/preloader';

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
      {isLoading ? <Preloader /> : <div>Your App Content Goes Here</div>}
    </div>
  );
};

export default App;