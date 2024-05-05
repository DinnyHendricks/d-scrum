
import Layout from './Pages/Layout'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>

        </Route>
      </Routes>
    </>
  )
}

export default App