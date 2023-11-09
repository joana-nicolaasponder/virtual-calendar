// import { useState, useEffect } from 'react'
// import { getWeather } from '../weatherApiClient'
// import { WeatherType } from '../Model/weatherDataType'
// export default function Weather() {
//   const [weather, setWeather] = useState<WeatherType | null>(null)

//   async function fetchWeather() {
//     const weatherData = await getWeather()
//     console.log(weatherData)
//     setWeather(weatherData)
//   }

//   useEffect(() => {
//     fetchWeather()
//   }, [])

//   return (
//     <>
//       <h1>Weather</h1>
//       <p>Chrischurch Temperature : {weather?.current.temperature_2m}</p>
//     </>
//   )
// }
