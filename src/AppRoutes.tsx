import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Usergists from './pages/Usergists/Usergists'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/usergists" element={<Usergists />} />
    </Routes>
  )
}

export default AppRoutes;