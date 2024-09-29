import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const smoothScrollTo = (target, duration = 1, offsetY = 50) => {
  const element = document.querySelector(target);
  if (element) {
    gsap.to(window, {
      duration,
      scrollTo: {
        y: element,
        offsetY,
      },
      ease: 'power3.inOut',
      onComplete: () => {
        // Update URL after scrolling
        window.history.pushState(null, '', target);
      },
    });
  } else {
    console.error(`Element with selector "${target}" not found.`);
  }
};
