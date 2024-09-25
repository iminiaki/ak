import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CursorFollower = () => {
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const follower = followerRef.current;
    
    const moveFollower = (e) => {
      gsap.to(follower, {
        duration: 0.3,
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
    gsap.to(followerRef.current, {
      duration: 0.3,
      scale: isHovering ? 1.5 : 1,
      ease: 'power2.out'
    });
  }, [isHovering]);

  return (
    <div 
      ref={followerRef} 
      className={`fixed flex justify-center items-center w-8 h-8 bg-fuchsia-700 rounded-full pointer-events-none z-50 mix-blend-difference
                  ${isHovering ? 'opacity-75 border border-fuchsia-700 bg-transparent' : 'opacity-50'}`}
      style={{ top: 0, left: 0, transform: 'translate(-50%, -50%)' }}
    >
        {isHovering && (
        <div className="w-1 h-1 bg-fuchsia-700 rounded-full" />
      )}
    </div>
  );
};

export default CursorFollower;