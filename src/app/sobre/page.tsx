import Link from 'next/link'
import styles from '../page.module.css'

export default function SobrePage() {
  return (
    <main className={styles.main}>
      <div style={{ 
        backgroundColor: 'white',
        padding: '40px', 
        borderRadius: '20px', 
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)', 
        maxWidth: '500px',
        width: '100%',
        textAlign: 'left',
        border: '1px solid #f0f0f0'
      }}>
        <h1 style={{fontSize: '1.8rem', color: '#1a1a1a', marginBottom: '20px', textAlign: 'center' }}>
          Sobre o Projeto
        </h1>

        <div style={{ marginBottom: '25px', lineHeight: '1.8' }}>
          <p><strong>Nome:</strong> Isabele</p>
          <p><strong>Turma:</strong> 303</p>
          <p><strong>Curso:</strong> Sistema de Informação</p>
        </div>

        <div style={{ 
          backgroundColor: '#f9f9f9', 
          padding: '15px', 
          borderRadius: '10px', 
          fontSize: '0.9rem', 
          color: '#555',
          marginBottom: '25px'
        }}>
          Este portal foi desenvolvido como parte da avaliação de Desenvolvimento Web. 
          Ele utiliza <strong>Next.js 14</strong> e consome dados em tempo real da 
          API <strong>OpenWeatherMap</strong> para exibir informações climáticas globais.
        </div>

        <nav style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '20px' }}>
          <Link href="/" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' }}>
            Voltar para o Início
          </Link>
        </nav>
      </div>
    </main>
  )
}