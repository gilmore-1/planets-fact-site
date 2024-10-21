import { createContext, useState } from 'react';
import { dataInterface } from './dataInterface';
import data from './data/data.json';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import PlanetInfo from './PlanetInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/mercury',
        element: <PlanetInfo />,
      },
      {
        path: '/venus',
        element: <PlanetInfo />,
      },
      {
        path: '/earth',
        element: <PlanetInfo />,
      },
      {
        path: '/mars',
        element: <PlanetInfo />,
      },
      {
        path: '/jupiter',
        element: <PlanetInfo />,
      },
      {
        path: '/saturn',
        element: <PlanetInfo />,
      },
      {
        path: '/uranus',
        element: <PlanetInfo />,
      },
      {
        path: '/neptune',
        element: <PlanetInfo />,
      },

    ]
  }
]);

export const PlanetContext = createContext<{
  data: dataInterface[];
  setData: React.Dispatch<React.SetStateAction<dataInterface[]>>;
}>({
  data: [],
  setData: () => { },
});

const App = () => {
  const [dataState, setDataState] = useState<dataInterface[]>(data);

  return (
    <PlanetContext.Provider value={{ data: dataState, setData: setDataState }}>
      <RouterProvider router={router} />
    </PlanetContext.Provider>
  );
};

export default App;