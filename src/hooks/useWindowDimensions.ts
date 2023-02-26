import { useEffect, useState } from 'react';

type UseWindowDimensionsType = {
  width: number;
  height: number;
};

const useWindowDimensions = (): UseWindowDimensionsType => {
  const [dimensions, setDimensions] = useState<UseWindowDimensionsType>({
    width: 0,
    height: 0
  });

  function handleResize() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return dimensions;
};

export default useWindowDimensions;
