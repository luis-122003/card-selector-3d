import React from 'react'
import './CardFlip.css'

export default function OnePunchCard({ character, selected, onClick }) {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

  const image = character.image?.startsWith('http')
    ? character.image
    : `${base}${(character.image || '').replace(/^public\//, '')}` // corrige si quedó 'public/...'

  // Si usas model viewer después:
  const model = character.model
    ? (character.model.startsWith('http')
        ? character.model
        : `${base}${character.model.replace(/^public\//, '')}`)
    : null

  return (
    <button
      className={`opc-card ${selected ? 'is-selected' : ''}`}
      onClick={() => onClick?.(character)}
      title={character.name}
      aria-pressed={!!selected}
    >
      <div className="opc-card-inner">
        <div className="opc-front">
          <img src={image} alt={character.name} loading="lazy" />
          <div className="opc-title">{character.name}</div>
        </div>
        <div className="opc-back">
          <div>
            <div style={{ fontWeight: 600 }}>{character.power || '—'}</div>
            <div style={{ marginTop: 8 }}>{character.description || ''}</div>
            <span className="opc-badge">{character.series || 'OPM'}</span>
          </div>
        </div>
      </div>
    </button>
  )
}