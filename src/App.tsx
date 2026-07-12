import './App.css'
import 'lenis/dist/lenis.css'
import { ReactLenis } from 'lenis/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import DetailedProject from './components/ProjectsLayouts/DetailedProject'
import ScrollRestoration from './hooks/ScrollRestoration';

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
        <ScrollRestoration/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/projects/:id" element={<DetailedProject />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>

  )
}

export default App
