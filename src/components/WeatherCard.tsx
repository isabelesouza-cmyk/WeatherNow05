export default function WeatherCard({ data, detalhado = false }: { data: any, detalhado?: boolean }) {
  const iconCode = data.weather?.[0]?.icon || '01d'
  const description = data.weather?.[0]?.description || ''
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png` // @4x para o ícone ficar nítido

  return (
    <div style={{ 
      backgroundColor: 'white',
      padding: '30px', 
      borderRadius: '20px', 
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)', 
      maxWidth: '350px',
      width: '100%',
      margin: '20px auto',
      textAlign: 'center',
      border: '1px solid #f0f0f0'
    }}>
      <h2 style={{ fontSize: '1.5rem', color: '#1a1a1a', marginBottom: '5px' }}>
        {data.name}, {data.sys.country}
      </h2>
      
      <p style={{ color: '#666', textTransform: 'capitalize', fontSize: '0.9rem' }}>
        {description}
      </p>

      <img 
        src={iconUrl} 
        alt={description} 
        style={{ width: '100px', height: '100px' }} 
      />

      <div style={{ marginBottom: '20px' }}>
        <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#0070f3' }}>
          {Math.round(data.main.temp)}°
        </span>
        <span style={{ fontSize: '1.2rem', color: '#666' }}>C</span>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '15px', 
        borderTop: '1px solid #eee', 
        paddingTop: '20px',
        fontSize: '0.85rem',
        color: '#444'
      }}>
        <div>
          <p style={{ fontWeight: 'bold', color: '#999', textTransform: 'uppercase', fontSize: '0.7rem' }}>Sensação</p>
          <p>{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div>
          <p style={{ fontWeight: 'bold', color: '#999', textTransform: 'uppercase', fontSize: '0.7rem' }}>Umidade</p>
          <p>{data.main.humidity}%</p>
        </div>

        {detalhado && (
          <>
            <div>
              <p style={{ fontWeight: 'bold', color: '#999', textTransform: 'uppercase', fontSize: '0.7rem' }}>Vento</p>
              <p>{data.wind.speed} m/s</p>
            </div>
            <div>
              <p style={{ fontWeight: 'bold', color: '#999', textTransform: 'uppercase', fontSize: '0.7rem' }}>Pressão</p>
              <p>{data.main.pressure} hPa</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}