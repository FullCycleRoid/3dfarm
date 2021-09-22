import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerHeight: height } = window;
  return height
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleheight() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('load', handleheight);
    window.addEventListener('scroll', handleheight);
  }, []);

  return windowDimensions;
}