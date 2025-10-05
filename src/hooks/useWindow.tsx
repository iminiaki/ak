import { useState, useEffect } from "react";

export type ViewPort = "isDesktop" | "isMobile";

const useWindow = () => {
  const [viewPort, setViewPort] = useState<ViewPort>(() => {
    if (typeof window === 'undefined') return "isMobile";
    return window.innerWidth > 769 ? "isDesktop" : "isMobile";
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setViewPort('isDesktop');
      } else {
        setViewPort('isMobile');
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return viewPort;
};

export default useWindow;
