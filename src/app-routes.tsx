import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import Usergists from './pages/user-gists/user-gists'
import GistPage from './pages/gist-page/gist-page'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/gist" element={<GistPage />} />
      <Route path="/usergists" element={<Usergists />} />
    </Routes>
  )
}

export default AppRoutes;