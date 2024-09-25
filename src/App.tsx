import useWindow from './hooks/useWindow';
import { DesktopLayout } from './layouts/DesktopLayout';

function App() {
  const viewPort = useWindow();
  const isDesktop = viewPort === 'isDesktop';

  return (
    <>
      {isDesktop ? <DesktopLayout /> : null}
    </>
  );
}

export default App;
