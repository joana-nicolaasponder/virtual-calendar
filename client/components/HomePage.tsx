import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'
// import SelectDate from './SelectDate.tsx'

import Weather from './Weather.tsx'
import Image from './Image.tsx'
import Affirmation from './Affirmation.tsx'

function HomePage() {
  return (
    <>
      <div className="box">
        {/* <SelectDate /> */}
        {/* <Weather />
      <Affirmation /> */}
       {/* <div className='image'> */}
        <Image  />
        {/* </div> */}
      </div>
    </>
  )
}

export default HomePage
