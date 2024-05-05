import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Essence from './Pages/Essence'
import ScrumTeam from './Pages/ScrumTeam'
import SprintEvents from './Pages/SprintEvents'
import Artifacts from './Pages/Artifacts'
import Layout from './Pages/Layout'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='essence' element={<Essence />} />
          <Route path='scrum-team' element={<ScrumTeam />} />
          <Route path='events' element={<SprintEvents />} />
          <Route path='artifacts' element={<Artifacts />} />
        </Route>
      </Routes>

    </>
  )
}

export default App;