import { useEffect, useState } from 'react';

const useMobile = (): number => {
  const [screenHeight, setScreenHeight] = useState<number>(0);

  function handleResize() {
    setScreenHeight(window?.innerHeight);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return screenHeight;
};

export default useMobile;
