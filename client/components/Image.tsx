import { useEffect, useState } from 'react'
import { getImages } from '../imageAPI'
import { ImageData, Src } from '../Model/imageDataType'
import DisplayDate from './DisplayDate'
import { getAffirmation } from '../affirmationApiClient'

import { WeatherType } from '../Model/weatherDataType'
import { getWeather } from '../weatherApiClient'

interface AffirmationType {
  affirmation: string
}
const date = new Date().toLocaleDateString('en-CA')
const initialAffirmation = {
  affirmation:
    'I am in the right place at the right time, doing the right thing',
}

export default function Image() {
  const [images, setImages] = useState<ImageData[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [locading, setLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState(date)
  const [form, setForm] = useState([])
  const [randomImage, setRandomImage] = useState<ImageData | null>(null)

  const [affirmation, setAffirmation] = useState<AffirmationType | null>(
    initialAffirmation
  )

  const [weather, setWeather] = useState<WeatherType | null>(null)

  const randomNumber = Math.floor(Math.random() * 15)

  useEffect(() => {
    fetchImages()
  }, [])

  useEffect(() => {
    fetchWeather()
  }, [])

  useEffect(() => {
    images && setRandomImage(images ? images[randomNumber] : null)
  }, [images])

  async function fetchImages() {
    try {
      setLoading(true)
      const imagesData = await getImages()

      setImages(imagesData)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }

  if (error) {
    return <p>Fail to load images</p>
  }
  if (locading) {
    return <p>Loading image...</p>
  }

  async function fetchAffirmation() {
    const affirmationData = await getAffirmation()
    console.log(affirmationData)
    setAffirmation(affirmationData)
  }

  async function fetchWeather() {
    const weatherData = await getWeather()
    console.log(weatherData)
    setWeather(weatherData)
  }

  const currentDate = new Date(selectedDate)
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const num = currentDate.getDate().toString().padStart(2, '0')
  const day = daysOfWeek[currentDate.getDay()]
  const month = months[currentDate.getMonth()]

  return (
    <>
      <div className="content">
        <div className="affirmation">{affirmation?.affirmation}</div>
        <div className="image">
          <img
            src={randomImage ? randomImage.src.large : ''}
            alt={randomImage ? randomImage.alt : ''}
            className="newImage"
          ></img>
        </div>
      </div>

      <div className="date">
        <div className="num">{num}</div>
        <div className="dateText">
          <div className="month">{month}</div>
          <div className="day">
            {day}
            {date === selectedDate && (
              <>
                {'  •  '}
                {weather?.current.temperature_2m}°C
              </>
            )}
          </div>
        </div>
        <form>
          <label htmlFor="date" className="dateLabel">
            Select a Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value)
              fetchAffirmation()
              setRandomImage(images ? images[randomNumber] : null)
            }}
          />
        </form>
      </div>
    </>
  )
}
