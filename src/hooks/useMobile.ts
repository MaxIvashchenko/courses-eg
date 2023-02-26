import { useEffect, useState } from 'react';

const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  function handleResize() {
    const isMob = window.innerWidth < 600;
    setIsMobile(isMob);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return isMobile;
};

export default useMobile;
