import React, { useMemo, useState } from 'react'
import OnePunchCard from './OnePunchCard.jsx'

const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

const charactersRaw = [
  { id: 1, name: 'Saitama', series: 'One Punch Man',
    image: '/assets/images/saitama.png', model: '/assets/models/saitama.glb',
    power: 'One Punch', description: 'El héroe más fuerte...' },
  { id: 2, name: 'Genos', series: 'One Punch Man',
    image: '/assets/images/genos.png', model: '/assets/models/genos.glb',
    power: 'Incineration Cannon', description: 'Un poderoso cyborg...' },
  { id: 3, name: 'Tatsumaki', series: 'One Punch Man',
    image: '/assets/images/tatsumaki.png', model: '/assets/models/tatsumaki.glb',
    power: 'Psychokinesis', description: 'Poderes telequinéticos...' },
  { id: 4, name: "Speed-o'-Sound Sonic", series: 'One Punch Man',
    image: '/assets/images/sonic.png', model: '/assets/models/sonic.glb',
    power: 'Super Speed', description: 'Un ninja extremadamente rápido...' },
  { id: 5, name: 'Garou', series: 'One Punch Man',
    image: '/assets/images/garou.png', model: '/assets/models/garou.glb',
    power: 'Martial Arts', description: 'Ex-heroico vuelto villano...' },
  { id: 6, name: 'Fubuki', series: 'One Punch Man',
    image: '/assets/images/fubuki.png', model: '/assets/models/fubuki.glb',
    power: 'Psychokinesis', description: 'Poder telequinético...' },
].map(c => ({
  ...c,
  image: `${base}${c.image}`,
  model: `${base}${c.model}`
}))

export default function CardList({ multi = true, onConfirm }) {
  const [q, setQ] = useState('')
  const [selected, setSelected] = useState([]) // array de ids

  const characters = useMemo(() => {
    const t = q.trim().toLowerCase()
    if (!t) return charactersRaw
    return charactersRaw.filter(c =>
      c.name.toLowerCase().includes(t) ||
      (c.series || '').toLowerCase().includes(t) ||
      (c.power || '').toLowerCase().includes(t)
    )
  }, [q])

  function toggleSelect(card) {
    setSelected(prev => {
      if (multi) {
        return prev.includes(card.id) ? prev.filter(id => id !== card.id) : [...prev, card.id]
      }
      return prev[0] === card.id ? [] : [card.id]
    })
  }

  return (
    <div style={{ maxWidth: 1200, margin: '16px auto', padding: '0 14px' }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Buscar por nombre, serie o poder…"
          style={{
            flex: 1, maxWidth: 420, padding: '10px 12px',
            border: '1px solid #2a2f3b', borderRadius: 10,
            background: '#0b0f1a', color: '#e5e7eb'
          }}
        />
        <div style={{ color: '#cbd5e1' }}>
          {selected.length} seleccionada(s)
          <button
            onClick={() => onConfirm?.(selected)}
            disabled={selected.length === 0}
            style={{
              marginLeft: 12, padding: '10px 14px', borderRadius: 10,
              background: selected.length ? '#7c3aed' : '#4b5563',
              color: 'white', border: 'none', cursor: selected.length ? 'pointer' : 'not-allowed'
            }}
          >
            Confirmar
          </button>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: 16, marginTop: 16
      }}>
        {characters.map(c => (
          <OnePunchCard
            key={c.id}
            character={c}
            selected={selected.includes(c.id)}
            onClick={toggleSelect}
          />
        ))}
      </div>
    </div>
  )
}