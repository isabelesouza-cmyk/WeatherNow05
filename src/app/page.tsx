import styles from './page.module.css'
import SearchBar from '../components/SearchBar'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div style={{ 
        backgroundColor: 'white',
        padding: '40px', 
        borderRadius: '20px', 
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)', 
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        border: '1px solid #f0f0f0'
      }}>
        <h1 style={{ fontSize: '2rem', color: '#1a1a1a', marginBottom: '10px' }}>
          WeatherNow 🌤️
        </h1>
        <p style={{ color: '#666', marginBottom: '30px', fontSize: '0.95rem' }}>
          Consulte a previsão do tempo de qualquer cidade do mundo.
        </p>
        
        <SearchBar />

        <nav style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <Link href="/sobre" style={{ fontSize: '0.85rem', color: '#0070f3', textDecoration: 'none' }}>
            Sobre o Projeto
          </Link>
        </nav>
      </div>
    </main>
  )
}