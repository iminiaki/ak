import { useEffect } from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import useWindow from './hooks/useWindow';
import { Home } from './pages/Home';
import { Body } from './sections/Body';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import CursorFollower from './utils/CursorFollower';
import { HashRouter } from 'react-router-dom';
import TickerTape from './components/TickerTape';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  useSmoothScroll();
  const viewPort = useWindow();
  const isDesktop = viewPort === 'isDesktop';

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [window.location.hash]);

  return (
    <>
    
      <Body>
        <HashRouter>
          <Header />
          <main>
            <Home />
            <TickerTape
              bgColor=''
              strings={['React', 'Next JS','JavaScript', 'Typescript', 'Tailwind', 'MUI', 'Zustand', 'Redux' ,'TanStack Query']}
              direction='left'
              separator='۞'
              className='rounded-xl backdrop-blur-md backdrop-brightness-50'
            />
            <About />
            <Contact />
          </main>
          <Footer />
        </HashRouter>
      </Body>
      {isDesktop && <CursorFollower />}
    </>
  );
}

export default App;
