import './App.css'
import 'lenis/dist/lenis.css'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollRestoration from './hooks/ScrollRestoration';

const Home = lazy(() => import("./pages/Home"));
const DetailedProject = lazy(() => import("./components/ProjectsLayouts/DetailedProject"));
import { lazy, Suspense } from 'react';

function Loading() {
  return (
    <div className='loading_page'>
      <p>Loading</p>
    </div>
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
          <ScrollRestoration/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/projects/:id" element={<DetailedProject />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ReactLenis>

  )
}

export default App
