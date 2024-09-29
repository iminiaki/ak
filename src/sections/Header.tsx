import { useState, useEffect } from 'react';
import { faHome, faBook, faPortrait, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { smoothScrollTo } from '../utils/smoothScrollTo';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [hoveredLink, setHoveredLink] = useState('#home');

  useEffect(() => {
    // Set initial active link based on URL hash
    const hash = window.location.hash || '#home';
    setActiveLink(hash);
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    setActiveLink(path);
    smoothScrollTo(path);
  };

  return (
    <header className='sticky top-2 w-full flex justify-between items-center h-20 border-2 border-opacity-75 border-gray-800 rounded-2xl mt-2 p-4 z-20 backdrop-blur-3xl backdrop-brightness-50'>
      <div className='max-w-20'>
        <img src='../src/assets/images/logo/AK-logo.png' alt='Logo' />
      </div>
      <nav className='relative menu'>
        <ul className='flex justify-between gap-2'>
          {['#home', '#portfolio', '#about', '#contact'].map((path, index) => {
            const titles = ['Home', 'Portfolio', 'About', 'Contact'];
            const icons = [faHome, faBook, faPortrait, faPhone];
            return (
              <li key={index} className='relative'>
                <a
                  href={path}
                  className={`flex items-center gap-2 py-2 px-8 ${activeLink === path ? 'text-fuchsia-700' : 'text-white'} hover:text-fuchsia-700 active:text-fuchsia-700 group transition-all`}
                  onMouseEnter={() => setHoveredLink(path)}
                  onMouseLeave={() => setHoveredLink(activeLink)}
                  onClick={(e) => handleClick(e, path)}
                >
                  <FontAwesomeIcon icon={icons[index]} className='group-hover:animate-jello' />
                  <span>{titles[index]}</span>
                </a>
                <div
                  className={`absolute h-[3px] rounded-full bg-fuchsia-700 transition-all duration-300 ease-in-out`}
                  style={{
                    bottom: '-5px',
                    left: '5px',
                    right: '5px',
                    margin: '0 auto',
                    width: hoveredLink === path || activeLink === path ? '50%' : '0%',
                  }}
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <button className='bg-gradient-to-tr from-blue-950 to-fuchsia-700 text-white flex items-center gap-2 py-2 px-8 rounded-xl'>
          <FontAwesomeIcon className='animate-shake' icon={faPhone} />
          Call
        </button>
      </div>
    </header>
  );
};
