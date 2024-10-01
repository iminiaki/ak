import { useEffect } from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import useWindow from './hooks/useWindow';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Body } from './sections/Body';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import CursorFollower from './utils/CursorFollower';

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
  }, []);

  return (
    <>
      <Body>
        <>
          <Header />
          <main>
            <Home id='home' />
            <Portfolio id='portfolio' />
            
          </main>
          <Footer />
        </>
      </Body>
      {isDesktop && <CursorFollower />}
    </>
  );
}

export default App;
