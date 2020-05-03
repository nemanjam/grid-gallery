import { useState, useEffect } from 'react';

const useLoadImage = src => {
  const [loading, setLoading] = useState(true);
  const [currentSource, setCurrentSource] = useState(null);

  useEffect(() => {
    if (src) {
      const highResImage = new Image();
      highResImage.onload = () => {
        setLoading(false);
        setCurrentSource(src);
      };
      highResImage.src = src;
    }
  }, [src]);
  return { src: currentSource, loading };
};

export default useLoadImage;
