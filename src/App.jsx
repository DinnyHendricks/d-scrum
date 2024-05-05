import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Essence from './pages/Essence'
import ScrumTeam from './pages/ScrumTeam'
import SprintEvents from './pages/SprintEvents'
import Artifacts from './pages/Artifacts'
import Layout from './pages/Layout'
import './App.css'

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout />} />
          <Route index element={<Home />} />
          <Route path='essence' element={<Essence />} />
          <Route path='scrum-team' element={<ScrumTeam />} />
          <Route path='events' element={<SprintEvents />} />
          <Route path='artifacts' element={<Artifacts />} />
          <Route path='*' element={<Artifacts />} />
      </Routes>

    </>
  )
}

export default App;