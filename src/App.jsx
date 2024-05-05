import Artifacts from './Pages/Artifacts'
import Essence from './Pages/Essence'
import Home from './Pages/Home'
import ScrumTeam from './Pages/ScrumTeam'
import SprintEvents from './Pages/SprintEvents'
import Layout from './Pages/Layout'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        
          
          <Route path='/essence' element={<Essence />}/>
          <Route path='/scrum-team' element={<ScrumTeam />}/>
          <Route path='/events' element={<SprintEvents />}/>
          <Route path='/artifacts' element={<Artifacts />}/>
          <Route path='/' element={<Home />}/>

      </Routes>
    </>
  )
}

export default App