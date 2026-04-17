'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [cidade, setCidade] = useState('')
  const router = useRouter()

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (cidade.trim()) {
      // Envia para a rota dinâmica
      router.push(`/cidade/${cidade.trim()}`)
    }
  }

  return (
    <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <input 
        type="text" 
        placeholder="Ex: Salvador, BR" 
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        style={{ 
          padding: '12px 15px', 
          borderRadius: '10px', 
          border: '1px solid #ddd',
          fontSize: '1rem',
          outline: 'none',
          color: '#333'
        }}
      />
      <button 
        type="submit" 
        style={{ 
          padding: '12px', 
          backgroundColor: '#0070f3', 
          color: 'white', 
          border: 'none', 
          borderRadius: '10px', 
          fontWeight: '600',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background 0.2s'
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0070f3')}
      >
        Ver Clima
      </button>
    </form>
  )
}