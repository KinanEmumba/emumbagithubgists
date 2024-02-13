import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Usergists from './pages/Usergists/Usergists'

const routes = [
  {path: '/', element: <Homepage />},
  {path: '/usergists', element: <Usergists />},
];
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => <Route
          key={index}
          path={route.path}
          element={route.element}
        />)}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;