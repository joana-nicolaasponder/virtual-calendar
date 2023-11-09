import { useEffect, useState } from 'react'
import { getImages } from '../imageAPI'
import { ImageData } from '../imageDataType'

export default function Image() {
  const [images, setImages] = useState<ImageData[] | null>(null)
  const [error, setError] = useState <Error | null>(null)
  const [locading, setLoading] = useState(false)
  const randomNumber = Math.floor(Math.random() * 30) 

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    try {
      setLoading(true)
      const imagesData = await getImages()
      // console.log(imagesData)
      setImages(imagesData)
    } catch (error) {
      setError(error as Error)
    }finally{
      setLoading(false)
    }
  }

  if(error){
    return <p>Fail to locad images</p>
  }
  if(locading){
    return <p>Loading image...</p>
  }
  return (
    <>
      <h1>Image</h1>

      <img
        src={images? images[randomNumber].url: ''}
        alt="a cat"
        width={300 }
        height={300 }
      ></img>
    </>
  )
}
