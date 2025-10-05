"use client";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const text = `I'm Iman Akrami, a passionate 🕸️ web developer with a background in 🖥️ computer science and over 6 years of hands-on experience. My journey began at ParsOnline, where I entered the tech world as a 📞 call operator. I then transitioned into 🧑‍💻 IT and networking at Zoraq, which laid a strong technical foundation for my future growth.

I discovered my passion for web development while working at Arianahad, where I started building with  WordPress and was introduced to ⚛️ React. Since then, I’ve deepened my expertise across both technologies, working with agencies like Arsamtech and Fixso, and later joining QuestIdea and Lastaar — where I now specialize in 🎨 frontend development.

Alongside my full-time roles, I’ve led numerous freelance projects and honed my skills in 🔍 SEO, helping businesses build high-performing, optimized websites. My diverse background enables me to adapt quickly, collaborate effectively, and choose the right tools to deliver scalable, user-focused solutions. 🚀`;

  const words = text.split(/\s+/); // Splitting the text into an array of words

  useEffect(() => {
    if (!sectionRef.current) return;

    const triggerElement = sectionRef.current;

    // Create a ScrollTrigger instance
    const scrollTrigger = ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top top',
      end: `+=${words.length * 20}`, // Dynamic end value based on the number of words
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        // Calculate the current word index based on scroll progress
        const newIndex = Math.floor(self.progress * words.length);
        setCurrentWordIndex(newIndex);
      },
    });

    // Cleanup on unmount or when the component is updated
    return () => {
      scrollTrigger.kill();
    };
  }, [words.length]);

  return (
    <section ref={sectionRef} id="about" className="min-h-screen flex justify-center items-center gap-8 relative pt-24 md:pt-0">
      <div className="flex justify-center items-center w-full h-full px-6 text-center">
        <div className="max-w-2xl md:max-w-lg">
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
    </section>
  );
};

export default About;

