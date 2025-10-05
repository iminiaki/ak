import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  return (
    <div className='relative bottom-0 mx-auto w-full max-w-8xl '>
      <svg viewBox='0 -100 1440 320' className='absolute bottom-0'>
        <path
          className='stroke-gray-800 fill-black flex justify-center items-center '
          fillOpacity='0.5'
          d='M0,288L26.7,256C53.3,224,107,160,160,154.7C213.3,149,267,203,320,186.7C373.3,171,427,85,480,48C533.3,11,587,21,640,26.7C693.3,32,747,32,800,58.7C853.3,85,907,139,960,144C1013.3,149,1067,107,1120,101.3C1173.3,96,1227,128,1280,170.7C1333.3,213,1387,267,1413,293.3L1440,320L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z'
        ></path>
      </svg>
      <div className='relative inset-0 flex justify-center items-end min-h-80 p-4'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2 items-center justify-center'>
            <a href='https://www.linkedin.com/in/iman-akrami' target='_blank' rel='nofollow'>
              <FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-fuchsia-800 hover:animate-jello' />
            </a>
            <a href='https://github.com/iminiaki' target='_blank' rel='nofollow'>
              <FontAwesomeIcon icon={faGithub} className='text-white hover:text-fuchsia-800 hover:animate-jello' />
            </a>
            <a href='mailto:iminiaki@gmail.com' target='_blank' rel='nofollow'>
              <FontAwesomeIcon icon={faEnvelope} className='text-white hover:text-fuchsia-800 hover:animate-jello' />
            </a>
          </div>
          <p className='text-white text-sm'>All Rights Reserved © 2025</p>
        </div>
      </div>
    </div>
  );
};
