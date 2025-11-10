import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const nav = useNavigate()
  return (
    <main className="home">
      <div className="content">
        <h1>ONE PUNCH MAN - HEROES</h1>
        <p>Explora las cartas y visualízalas en 3D</p>
        <button className="btn" onClick={() => nav('/selector')}>
          Ir al selector
        </button>
      </div>
    </main>
  )
}