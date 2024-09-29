import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CursorFollower = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;

    const moveFollower = (e) => {
      gsap.to(outer, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out'
      });
      gsap.to(inner, {
        duration: 0.1,
        x: e.clientX,
        y: e.clientY,
        ease: 'power2.out'
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', moveFollower);

    return () => {
      window.removeEventListener('mousemove', moveFollower);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    gsap.to(outerRef.current, {
      duration: 0.3,
      scale: isHovering ? 1.2 : 1,
      opacity: isHovering ? 1 : 0.5,
      ease: 'power2.out'
    });
    gsap.to(innerRef.current, {
      duration: 0.3,
      // scale: isHovering ? 0.5 : 1,
      opacity: isHovering ? 1 : 0.8,
      ease: 'power2.out'
    });
  }, [isHovering]);

  return (
    <>
      <div
        ref={outerRef}
        className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference border border-fuchsia-700`}
        style={{ top: 0, left: 0, transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={innerRef}
        className={`fixed bg-fuchsia-700 rounded-full pointer-events-none z-50 mix-blend-difference ${isHovering ? 'w-4 h-4' : 'w-2 h-2'}`}
        style={{ top: 0, left: 0, transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CursorFollower;