import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const text = `I'm Iman Akrami, a passionate web developer with a background in computer science. 
    My professional journey began at ParsOnline, where I started as a call operator. 
    I soon transitioned into the role of network assistant at Zoraq, where I gained hands-on experience 
    in IT and networking. From there, I discovered my passion for WordPress development while working at 
    Arianahad. This is also where I was introduced to React, marking the beginning of my web development 
    journey. Over time, I continued to expand my skills in both WordPress and React, working remotely as 
    a WordPress developer for Arsamtech and Fixso, two marketing agencies. Later, I joined QuestIdea as 
    a WordPress developer, and most recently, Lastaar, where I've taken on the separate role of a front-end 
    developer. Throughout my 6 years of experience, I've also completed numerous freelance projects, 
    constantly learning and refining my skills. I've developed a strong foundation in SEO, delivering 
    several successful SEO-focused projects alongside my web development work. This diverse experience 
    allows me to adapt to various project needs and implement the best technologies to deliver optimized, 
    high-performing solutions.`;

  const words = text.trim().split(/\s+/);

  useEffect(() => {
    if (!sectionRef.current) return;

    const triggerElement = sectionRef.current;
    
    // Create a spacer element for scrolling
    const spacer = document.createElement('div');
    // spacer.style.height = `${words.length * 50}px`; // Adjust multiplier for scroll sensitivity
    triggerElement.appendChild(spacer);

    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement,
      start: "top top",
      end: () => `+=${words.length * 20}`, // Match spacer height
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        // Calculate current word index based on scroll progress
        const newIndex = Math.floor(self.progress * words.length);
        setCurrentWordIndex(newIndex);
      },
    });

    return () => {
      if (spacer.parentNode) {
        spacer.parentNode.removeChild(spacer);
      }
      scrollTrigger.kill();
    };
  }, [words.length]);

  return (
    <div 
      ref={sectionRef}
      className="h-screen w-full relative"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-2xl px-6 text-center">
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block transition-opacity duration-300 text-white text-lg mx-1 ${
              index <= currentWordIndex ? 'opacity-100' : 'opacity-10'
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;