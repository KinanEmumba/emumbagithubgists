import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import Usergists from './pages/user-gists/user-gists'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/usergists" element={<Usergists />} />
    </Routes>
  )
}

export default AppRoutes;