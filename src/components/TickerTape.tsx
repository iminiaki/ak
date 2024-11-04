import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface TickerTapeProps {
  strings?: string[];
  bgColor?: string;
  direction?: 'left' | 'right';
  className?: string;
  separator?: string;
}

const TickerTape: React.FC<TickerTapeProps> = ({
  strings = ['Custom Message 1', 'Custom Message 2', 'Custom Message 3'],
  bgColor = 'bg-purple-600',
  direction = 'left',
  separator,
  className,
}) => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const duplicateArrayToFill = (arr: string[], minLength: number = 10): string[] => {
    const result = [...arr];
    while (result.length < minLength) {
      result.push(...arr);
    }
    return result;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        xPercent: direction === 'left' ? -50 : 50,
        ease: 'none',
        scrollTrigger: {
          trigger: tickerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [direction]);

  const filledStrings = duplicateArrayToFill(strings);
  const displayStrings = direction === 'right' ? [...filledStrings].reverse() : filledStrings;

  return (
    <div ref={tickerRef} className='relative w-full h-16 overflow-hidden rounded-xl'>
      <div
        className={`absolute top-0 left-0 w-full h-full ${bgColor} overflow-hidden ${className}`}
      >
        <div
          ref={textRef}
          className='absolute top-0 left-0 h-full whitespace-nowrap flex items-center'
          style={{ width: '200%' }}
        >
          {displayStrings.map((text, i) => (
            <React.Fragment key={i}>
              <span className='inline-flex items-center text-white text-2xl px-4'>{text}</span>
              {/* Separator as a standalone element */}
              <span className='text-gradient text-2xl flex items-center'>{separator}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerTape;
