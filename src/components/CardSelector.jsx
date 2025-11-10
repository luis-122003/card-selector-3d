import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardList from './CardList.jsx'

export default function CardSelector() {
  const nav = useNavigate()
  function onConfirm(ids) {
    const qs = new URLSearchParams()
    qs.set('ids', ids.join(','))
    nav(`/viewer?${qs}`)
  }
  return (
    <div>
      <h1 style={{ color: '#e5e7eb', margin: '10px 14px' }}>Selecciona tus cartas</h1>
      <CardList multi={true} onConfirm={onConfirm} />
    </div>
  )
}