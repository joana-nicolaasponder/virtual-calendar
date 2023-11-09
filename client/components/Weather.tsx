import { useState, useEffect } from 'react'
import { getWeather } from '../weatherApiClient'

export interface Weather {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_units: CurrentUnits
  current: Current
}

export interface Current {
  time: string
  interval: number
  temperature_2m: number
}

export interface CurrentUnits {
  time: string
  interval: string
  temperature_2m: string
}
export default function Weather() {
  const [weather, setWeather] = useState<Weather | null>(null)

  async function fetchWeather() {
    const weatherData = await getWeather()
    console.log(weatherData)
    setWeather(weatherData)
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <>
      <h1>Weather</h1>
      {weather?.current.temperature_2m}
    </>
  )
}
