import { useContext, useState, useEffect } from 'react';
import { PlanetContext } from './App';
import { useLocation } from 'react-router';
import Mercury from './assets/planet-mercury.svg';
import Venus from './assets/planet-venus.svg';
import Earth from './assets/planet-earth.svg';
import Mars from './assets/planet-mars.svg';
import Jupiter from './assets/planet-jupiter.svg';
import Saturn from './assets/planet-saturn.svg';
import Uranus from './assets/planet-uranus.svg';
import Neptune from './assets/planet-neptune.svg';

const planetImages: { [key: string]: string } = {
  mercury: Mercury,
  venus: Venus,
  earth: Earth,
  mars: Mars,
  jupiter: Jupiter,
  saturn: Saturn,
  uranus: Uranus,
  neptune: Neptune,
};

const PlanetInfo = () => {
  const { data } = useContext(PlanetContext);
  const location = useLocation();
  const currentPlanet = location.pathname.split('/')[1];
  const planetData = data.find(planet => planet.name.toLowerCase() === currentPlanet);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeColor, setActiveColor] = useState("white");

  useEffect(() => {
    if (planetData?.name === "Mercury") {
      setActiveColor("#419EBB");
    } else if (planetData?.name === "Venus") {
      setActiveColor("#EDA249");
    } else if (planetData?.name === "Earth") {
      setActiveColor("#6D2ED5");
    } else if (planetData?.name === "Mars") {
      setActiveColor("#D14C32");
    } else if (planetData?.name === "Jupiter") {
      setActiveColor("#D83A34");
    } else if (planetData?.name === "Saturn") {
      setActiveColor("#CD5120");
    } else if (planetData?.name === "Uranus") {
      setActiveColor("#1EC1A2");
    } else if (planetData?.name === "Neptune") {
      setActiveColor("#2D68F0");
    }
  }, [planetData?.name]);

  if (!planetData) {
    return <div>Planet not found</div>;
  }
  const planetImageSrc = planetImages[planetData.name.toLowerCase()];

  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-full p-4'>
        <div className='flex flex-col md:flex-row justify-center items-center w-full gap-8 md:gap-16 lg:gap-24'>
          <div>
            <img src={planetImageSrc} alt={planetData.name} className='w-48 md:w-72 lg:w-96' />
          </div>
          <div className='min-h-80 p-4 md:p-12'>
            <h1 className='text-2xl md:text-4xl lg:text-6xl'>{planetData.name}</h1>
            <p className='text-white font-spartan text-sm md:text-base lg:text-lg font-normal leading-6 w-full md:w-80 mt-6 mb-6'>{planetData.overview.content}</p>
            <div className='flex items-center mt-6'>
              <span className='opacity-50 text-white font-[Spartan] text-[14px] font-bold leading-[25px] underline'>Source : Wikipedia</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z" fill="white" />
              </svg>
            </div>
            <div className='mt-10 space-y-4'>
              <button
                className='flex w-full p-3 space-x-3 border border-white border-opacity-20'
                style={{ backgroundColor: activeColor }}
              >
                <span className='text-white font-[Spartan] text-[12px] font-bold leading-[25px] tracking-[2.571px] uppercase'>01</span>
                <span className='text-white font-[Spartan] text-[12px] font-bold leading-[25px] tracking-[2.571px] uppercase'>OVERVIEW</span>
              </button>
              <button
                className='flex w-full p-3 space-x-3 border border-white border-opacity-20'
                style={{ backgroundColor: activeColor }}
              >
                <span className='text-white font-[Spartan] text-[12px] font-bold leading-[25px] tracking-[2.571px] uppercase'>02</span>
                <span className='text-white font-[Spartan] text-[12px] font-bold leading-[25px] tracking-[2.571px] uppercase'>Internal Structure</span>
              </button>
              <button
                className='flex w-full p-3 space-x-3 border border-white border-opacity-20'
                style={{ backgroundColor: activeColor }}
              >
                <span className='text-white font-[Spartan] text-[12px] font-bold leading-[25px] tracking-[2.571px] uppercase'>03</span>
                <span className='text-white font-[Spartan] text-[12px] font-bold leading-[25px] tracking-[2.571px] uppercase'>Surface Geology</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 md:mt-16 space-y-4 md:space-y-0 md:space-x-8'>
        <div className='border-2 w-full md:w-64 p-4'>
          <h3 className='text-white opacity-20 font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase'>ROTATION TIME</h3>
          <p className='text-white font-[Spartan] text-[24px] font-bold leading-[25px] tracking-[1px] mt-6'>{planetData.rotation}</p>
        </div>
        <div className='border-2 w-full md:w-64 p-4'>
          <h3 className='text-white opacity-20 font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase'>REVOLUTION TIME</h3>
          <p className='text-white font-[Spartan] text-[24px] font-bold leading-[25px] tracking-[1px] mt-6'>{planetData.revolution}</p>
        </div>
        <div className='border-2 w-full md:w-64 p-4'>
          <h3 className='text-white opacity-20 font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase'>RADIUS</h3>
          <p className='text-white font-[Spartan] text-[24px] font-bold leading-[25px] tracking-[1px] mt-6'>{planetData.radius}</p>
        </div>
        <div className='border-2 w-full md:w-64 p-4'>
          <h3 className='text-white opacity-20 font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase'>AVERAGE TEMP</h3>
          <p className='text-white font-[Spartan] text-[24px] font-bold leading-[25px] tracking-[1px] mt-6'>{planetData.temperature}</p>
        </div>
      </div>

      {/* Burger Menu */}
      <div className='fixed top-4 right-4 sm:flex md:flex lg:hidden xl:hidden 2xl:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center sm:flex md:flex lg:hidden xl:hidden 2xl:hidden'>
          <button onClick={() => setMenuOpen(false)} className='absolute top-4 right-4 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <nav className='flex flex-col space-y-4'>
            <a href='/mercury' className='text-white text-2xl' onClick={() => setMenuOpen(false)}>Mercury</a>
            <a href='/venus' className='text-white text-2xl' onClick={() => setMenuOpen(false)}>Venus</a>
            <a href='/earth' className='text-white text-2xl' onClick={() => setMenuOpen(false)}>Earth</a>
            <a href='/mars' className='text-white text-2xl' onClick={() => setMenuOpen(false)}>Mars</a>
            <a href='/jupiter' className='text-white text-2xl' onClick={() => setMenuOpen(false)}>Jupiter</a>
            <a href='/saturn' className='text-white text-2xl' onClick={() => setMenuOpen(false)}>Saturn</a>
            <a href='/uranus' className='text-white text-2xl' onClick={() => setMenuOpen(false)}>Uranus</a>
            <a href='/neptune' className='text-white text-2xl' onClick={() => setMenuOpen(false)}>Neptune</a>
          </nav>
        </div>
      )}
    </>
  );
};

export default PlanetInfo;