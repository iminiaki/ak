import { faHome, faBook, faPortrait, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    // Set initial active link based on URL hash
    const hash = window.location.hash || '#home';
    setActiveLink(hash);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault(); // Prevent default link behavior (jumping immediately)
    setActiveLink(path);

    // Smooth scroll to the target element
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Manually update the hash in the URL
    window.history.pushState(null, '', path);
  };

  return (
    <header className="sticky top-2 w-full flex justify-between items-center h-20 border-2 border-opacity-75 border-gray-800 rounded-2xl mt-2 p-4 z-20 backdrop-blur-3xl backdrop-brightness-50">
      <div className="max-w-20">
        <img src="../src/assets/images/logo/AK-logo.png" alt="Logo" />
      </div>
      <nav className="relative menu">
        <ul className="flex justify-between gap-2">
          {['#home', '#portfolio', '#about', '#contact'].map((path, index) => {
            const titles = ['Home', 'Portfolio', 'About', 'Contact'];
            const icons = [faHome, faBook, faPortrait, faPhone];
            return (
              <li key={index} className="relative">
                <a
                  href={path}
                  className={`flex items-center gap-2 py-2 px-8 ${
                    activeLink === path ? 'text-fuchsia-700' : 'text-white'
                  } hover:text-fuchsia-700 group transition-all`}
                  onClick={(e) => handleClick(e, path)}
                >
                  <FontAwesomeIcon icon={icons[index]} />
                  <span>{titles[index]}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div>
        <button className="bg-gradient-to-tr from-blue-950 to-fuchsia-700 text-white flex items-center gap-2 py-2 px-8 rounded-xl">
          <FontAwesomeIcon icon={faPhone} />
          Call
        </button>
      </div>
    </header>
  );
};