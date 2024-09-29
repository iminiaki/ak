import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const useSmoothScroll = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href') || '');
        if (target) {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: target,
              offsetY: 50,
            },
            ease: 'power3.inOut',
          });
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);
};

export default useSmoothScroll;
