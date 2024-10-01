import { AImage } from '../components/AImage';

export const Home = (id) => {
  return (
    <section id={id} className='min-h-screen flex justify-between items-center gap-8'>
      <div className='flex flex-col gap-8 w-1/2'>
        <h1 className='text-white text-8xl font-semibold'>
          Iman
          <br />
          <span className='text-fuchsia-700'>Ak</span>rami
        </h1>
        <p className='text-gray-300 text-justify'>
          A front-end developer with 5 years of WordPress and 3 years of React experience,
          specializing in TypeScript. I'm passionate about building responsive, user-friendly
          interfaces and scalable web applications. With a blend of creativity and technical skill,
          I focus on delivering clean, maintainable code and seamless digital experiences.
        </p>
        <div className='flex gap-2'>
          <span className='tag relative text-xs rounded-xl border-2px border text-white '>
            <span className='absolute inset-0 rounded-full bg-fuchsia-950 w-4 h-4 m-auto ml-4 animate-pulse'></span>
            <p className='backdrop-blur-sm rounded-xl px-6 py-3'>React</p>
          </span>
          <span className='tag relative text-xs rounded-xl border-2px border text-white overflow-hidden'>
            <span className='absolute inset-0 rounded-full bg-fuchsia-950 w-4 h-4 m-auto ml-4 animate-pulse'></span>
            <p className='backdrop-blur-sm rounded-xl px-6 py-3'>Javascript</p>
          </span>
          <span className='tag relative text-xs rounded-xl border-2px border text-white overflow-hidden'>
            <span className='absolute inset-0 rounded-full bg-fuchsia-950 w-4 h-4 m-auto ml-4 animate-pulse'></span>
            <p className='backdrop-blur-sm rounded-xl px-6 py-3'>Typescript</p>
          </span>
        </div>
      </div>
      <div className='flex flex-col w-1/2 relative rounded-full overflow-hidden'>
        <div className='absolute inset-8 rounded-full'>
          <svg
            className='gradient-shape'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 288 288'
          >
            <linearGradient id='PSgrad_0' x1='0%' x2='70.711%%' y1='0%' y2='20.711%'>
              <stop offset='0%' stop-color='#172554' stop-opacity='1' />
              <stop offset='100%' stop-color='#a21caf' stop-opacity='1' />
            </linearGradient>
            <path fill='url(#PSgrad_0)' />
          </svg>
        </div>
        <div className='w-full rounded-full bg-transparent backdrop-blur-md overflow-hidden'>
          <AImage
            src='../src/assets/images/background/iman.png'
            alt='Iman Akrami'
            className='z-10'
          />
          <div className='absolute inset-0 '>
            <svg
              className='gradient-shape overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              x='px'
              y='0px'
              viewBox='0 0 288 288'
            >
              <linearGradient id='PSgrad_0' x1='70.711%' x2='0%' y1='70.711%' y2='0%'>
                <stop offset='0%' stop-color='#172554' stop-opacity='1' />
                <stop offset='100%' stop-color='#a21caf' stop-opacity='1' />
              </linearGradient>
              <path stroke='url(#PSgrad_0)' fill='transparent' />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
