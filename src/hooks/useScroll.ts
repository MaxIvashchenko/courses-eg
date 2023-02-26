import { useEffect, useState } from 'react';

const useScroll = (): boolean => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const changeColor = () => {
    if (window.scrollY > 88) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return isScrolled;
};

export default useScroll;
