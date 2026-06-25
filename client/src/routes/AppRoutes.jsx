import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const WorldClock = lazy(() => import('../pages/WorldClockPage'))

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/world-clock" element={<WorldClock />} />
    </Routes>
  )
}
