import './App.css'
import 'lenis/dist/lenis.css'
import Footer from './components/HomeLayouts/Footer'
import Navbar from './components/CommontLayouts/Navbar'
import Content from './components/HomeLayouts/Content'
import Dashboard from './components/HomeLayouts/Dashboard'
import { ReactLenis } from 'lenis/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import DetailedProject from './components/ProjectsLayouts/DetailedProject'

function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
      }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/projects/:id" element={<DetailedProject />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>

  )
}

export default App
