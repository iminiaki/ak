import { AImage } from '../components/AImage';

export const Home = ({ id }) => {
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
      </div>
      <div className='flex flex-col w-1/2'>
        <AImage src='../src/assets/images/background/iman.png' alt='Iman Akrami' />
      </div>
    </section>
  );
};
