import { useState } from 'react';
import { faHome, faBook, faPortrait, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [hoveredLink, setHoveredLink] = useState('/');

  return (
    <div className='sticky top-2 w-full flex justify-between items-center h-20 border-2 border-opacity-75 border-gray-800 rounded-2xl mt-2 p-4 z-20 backdrop-blur-3xl backdrop-brightness-50'>
      <div className='max-w-20'>
        <img src='../src/assets/images/logo/AK-logo.png' alt='hi'/>
      </div>
      <div className='relative menu'>
        <ul className='flex justify-between gap-2'>
          {['/', '/portfolio', '/about', '/contact'].map((path, index) => {
            const titles = ['Home', 'Portfolio', 'About', 'Contact'];
            return (
              <li key={index} className='relative'>
                <Link
                  to={path}
                  className={`flex items-center gap-2 py-2 px-8 ${activeLink === path ? 'text-fuchsia-700' : 'text-white'} hover:text-fuchsia-700 group transition-all`}
                  onMouseEnter={() => setHoveredLink(path)}
                  onMouseLeave={() => setHoveredLink(activeLink)}
                  onClick={() => setActiveLink(path)}
                >
                  <FontAwesomeIcon
                    icon={
                      path === '/'
                        ? faHome
                        : path === '/portfolio'
                          ? faBook
                          : path === '/about'
                            ? faPortrait
                            : faPhone
                    }
                    className='group-hover:animate-jello'
                  />
                  <p>{titles[index]}</p>
                </Link>
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
      </div>
      <div>
        <button className='bg-gradient-to-tr from-blue-950 to-fuchsia-700 text-white flex items-center gap-2 py-2 px-8 rounded-xl'>
          <FontAwesomeIcon className='animate-shake' icon={faPhone} />
          Call
        </button>
      </div>
    </div>
  );
};
