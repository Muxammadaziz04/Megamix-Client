import { useState, useEffect } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    if(typeof window !== 'undefined') {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowWidth;
}

export default useWindowWidth