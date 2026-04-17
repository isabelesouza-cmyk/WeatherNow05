import WeatherCard from '../../../components/WeatherCard'
import Link from 'next/link'

async function getWeatherData(cityName: string) {
  const key = process.env.NEXT_PUBLIC_WEATHER_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=pt_br`
  
  try {
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

export default async function CityPage({ params }: { params: Promise<{ name: string }> }) {
  const resolvedParams = await params
  const rawName = decodeURIComponent(resolvedParams.name)

  const cityName = rawName
    .split(',')
    .map((parte, index) => {
      const texto = parte.trim()
      if (index === 0) {
        return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
      }
      return texto.toUpperCase()
    })
    .join(', ')

  const data = await getWeatherData(cityName)

  return (
    <main style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>
           Voltar para a busca
        </Link>
      </nav>

      {data ? (
        <>
          <h1 style={{ marginBottom: '20px' }}>Resultado: {cityName}</h1>
          <WeatherCard data={data} detalhado={true} />
        </>
      ) : (
        <div style={{ color: 'red', marginTop: '20px' }}>
          <h2>Erro: Cidade "{cityName}" não encontrada.</h2>
          <p>Verifique o nome ou se a API Key no .env.local está correta.</p>
        </div>
      )}
    </main>
  )
}