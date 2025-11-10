// src/App.jsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './components/Home.jsx'
import CardSelector from './components/CardSelector.jsx'
import ModelViewer from './components/ModelViewer.jsx' // si aún no lo tienes, crea un placeholder

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selector" element={<CardSelector />} />
      <Route path="/viewer" element={<ModelViewer />} />
      {/* Fallback para rutas desconocidas */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}