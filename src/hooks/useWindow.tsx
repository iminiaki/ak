import { useState, useEffect } from "react";

export type ViewPort = "isDesktop" | "isMobile";

const useWindow = () => {
  const [viewPort, setViewPort] = useState<ViewPort>(() => {
    return window.innerWidth > 769 ? "isDesktop" : "isMobile";
  });

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 769
        ? setViewPort("isDesktop")
        : setViewPort("isMobile");
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
