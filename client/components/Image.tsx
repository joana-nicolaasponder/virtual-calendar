import { useEffect, useState } from 'react'
import { getImages } from '../imageAPI'
import { ImageData, Src } from '../imageDataType'
import DisplayDate from './DisplayDate'

// const defaultImage = {
//   // id: 0,
//   src: '../public/image.jpg',
//   // width: '',
//   // height: '',
//   // alt: ''
// }

export default function Image() {
  const [images, setImages] = useState<ImageData[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [locading, setLoading] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  const [form, setForm] = useState([])
  const [randomImage, setRandomImage] = useState<ImageData | null>(null)
  const randomNumber = Math.floor(Math.random() * 15)
  

  useEffect(() => {
    console.log('hello')
    fetchImages()
  }, [])

  async function fetchImages() {
    console.log('hi')
    try {
      setLoading(true)
      const imagesData = await getImages()
      console.log(imagesData)
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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setRandomImage(images ? images[randomNumber] : null)
  }
  return (
    <>
      <h2>Calendar</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Select a Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <p>Selected Date: {selectedDate}</p>

      <img
        src={randomImage ? randomImage.src.large : ''}
        alt={randomImage ? randomImage.alt : ''}
        // width={300}
        // height={300}
      ></img>
      <DisplayDate date={selectedDate} />
    </>
  )
}
