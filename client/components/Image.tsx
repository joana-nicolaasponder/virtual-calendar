import { useEffect, useState } from 'react'
import { getImages } from '../imageAPI'
import { ImageData, Src } from '../Model/imageDataType'
import DisplayDate from './DisplayDate'
import { getAffirmation } from '../affirmationApiClient'

import { WeatherType } from '../Model/weatherDataType'
import { getWeather } from '../weatherApiClient'
// import { WeatherType } from '../Model/weatherDataType'

// const defaultImage = {
//   // id: 0,
//   src: '../public/image.jpg',
//   // width: '',
//   // height: '',
//   // alt: ''
// }
interface AffirmationType {
  affirmation: string
}
const date = new Date().toLocaleDateString('en-CA')

export default function Image() {
  const [images, setImages] = useState<ImageData[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [locading, setLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState(date)
  const [form, setForm] = useState([])
  const [randomImage, setRandomImage] = useState<ImageData | null>(null)

   const [affirmation, setAffirmation] = useState<AffirmationType | null>(null)




  const [weather, setWeather] = useState<WeatherType | null>(null)

  const randomNumber = Math.floor(Math.random() * 15)

  useEffect(() => {
    fetchImages()
  }, [])

  

  useEffect(() => {
    fetchWeather()
    
  }, [])

  useEffect(()=>{
    images && setRandomImage(images ? images[randomNumber] : null)
  },[images])

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

  const currentDate = new Date()
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const num = currentDate.getDate().toString().padStart(2, '0')
  const day = daysOfWeek[currentDate.getDay()]
  const month = months[currentDate.getMonth()]

 
  return (
    <>
      <h2>Calendar</h2>
      <form >
        <label htmlFor="date">Select a Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={selectedDate}
          onChange={(e) => {setSelectedDate(e.target.value)
            fetchAffirmation()
            setRandomImage(images ? images[randomNumber] : null)}}
          
        />
       
      </form>
      <p>Selected Date: {selectedDate}</p>

      <DisplayDate date={selectedDate} />

      {/* ////// */}
      <div className='content'>
        <div className='affirmation'>
          {affirmation?.affirmation}
        </div>
        <div className='image'>
          <img
            src={randomImage ? randomImage.src.large : ''}
            alt={randomImage ? randomImage.alt : ''}
            className="newImage"
          ></img>
        </div>
      </div>
      <div className='date'>
          <div className="num">{num}</div>
          <div className="dateText">
            <div className="month">{month}</div>
            <div className="day">{day}</div>
          </div>
            <div className='weather'>
              <div className='weather-code'>Windy</div>
                {
                  date === selectedDate && (
                    <>
                    <p>{weather?.current.temperature_2m}°C</p>
                    </>)
                }
            </div>
      </div>
    </>
  )
}
