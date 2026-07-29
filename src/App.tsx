import './App.css'
import 'lenis/dist/lenis.css'
import { ReactLenis } from 'lenis/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { useScrollToTop } from './hooks/useScrollToTop';

const Home = lazy(() => import("./pages/Home"));
const DetailedProject = lazy(() => import("./components/ProjectsLayouts/DetailedProject"));

function Loading() {
  return (
    <div className='loading_page'>
      <p>Loading</p>
    </div>
  )
}

function AppRoutes() {
  useScrollToTop(); // Letakkan di dalam BrowserRouter
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/projects/:id" element={<DetailedProject />} />
    </Routes>
  )
}

function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
      }}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </ReactLenis>
  )
}

export default App