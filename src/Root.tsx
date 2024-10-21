import { NavLink, Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='h-screen'>
      <header>
        <div className='flex justify-between items-center p-8 outline-black outline-opacity-20'>
          <div>
            <h2>THE PLANETS</h2>
          </div>
          <div className='hidden md:hidden lg:flex sm:hidden justify-center items-center gap-8'>
            <NavLink
              to="/mercury"
              className={({ isActive }) =>
                `text-white font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase ${isActive ? 'underline' : ''}`
              }
            >
              MERCURY
            </NavLink>
            <NavLink
              to="/venus"
              className={({ isActive }) =>
                `text-white font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase ${isActive ? 'underline' : ''}`
              }
            >
              VENUS
            </NavLink>
            <NavLink
              to="/earth"
              className={({ isActive }) =>
                `text-white font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase ${isActive ? 'underline' : ''}`
              }
            >
              EARTH
            </NavLink>
            <NavLink
              to="/mars"
              className={({ isActive }) =>
                `text-white font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase ${isActive ? 'underline' : ''}`
              }
            >
              MARS
            </NavLink>
            <NavLink
              to="/jupiter"
              className={({ isActive }) =>
                `text-white font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase ${isActive ? 'underline' : ''}`
              }
            >
              JUPITER
            </NavLink>
            <NavLink
              to="/saturn"
              className={({ isActive }) =>
                `text-white font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase ${isActive ? 'underline' : ''}`
              }
            >
              SATURN
            </NavLink>
            <NavLink
              to="/uranus"
              className={({ isActive }) =>
                `text-white font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase ${isActive ? 'underline' : ''}`
              }
            >
              URANUS
            </NavLink>
            <NavLink
              to="/neptune"
              className={({ isActive }) =>
                `text-white font-[Spartan] text-[11px] font-bold leading-[25px] tracking-[1px] uppercase ${isActive ? 'underline' : ''}`
              }
            >
              NEPTUNE
            </NavLink>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default Root 