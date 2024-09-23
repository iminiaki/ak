import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimationProps {
  opacity?: number;
  y?: number;
  duration?: number;
  delay?: number;
}

export const useGSAPAnimation = (props: AnimationProps) => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: props.opacity ?? 0,
      y: props.y ?? 50,
      duration: props.duration ?? 1,
      delay: props.delay ?? 0,
      ease: "power3.out"
    });
  }, [props]);

  return elementRef;
};