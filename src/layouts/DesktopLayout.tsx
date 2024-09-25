import { ReactElement } from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import CursorFollower from '../utils/CursorFollower';

interface IDesktopLayout {
  children?: ReactElement;
  className?: string;
}
export function DesktopLayout(props: IDesktopLayout) {
  const { children, className } = props;
  return <>
  <div className='min-h-screen flex items-center justify-center bg-black'>
      <div className='fixed hidden md:block opacity-70 -bottom-[40%] -left-[20%] z-0'>
        <img
          src='../src/assets/images/background/docs-left.png'
          className='relative shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large'
          alt='docs left background'
        />
      </div>
      <div
        className='fixed hidden md:block opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12'
      >
        <img
          src='../src/assets/images/background/docs-right.png'
          className='relative shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large'
          alt='docs right background'
        />
      </div>
      <main className='min-h-screen w-screen max-w-8xl font-poppins relative'>
        <Header/>
            <div className={`py-8 ${className}`}>
                {children}
            </div>
        <Footer/>
        <CursorFollower />
        </main>
        </div>
  </>
}
