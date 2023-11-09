import request from 'superagent'

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

export async function getWeather(): Promise<Weather> {
  const response = await request.get(
    'https://api.open-meteo.com/v1/forecast?latitude=-42&longitude=174&current=temperature_2m'
  )
  return response.body
}
