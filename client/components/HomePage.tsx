import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'

import Weather from './Weather.tsx'
import Image from './Image.tsx'
import Affirmation from './Affirmation.tsx'


function HomePage() {
  return (
    <>
      <Weather />
      <Affirmation />
      <Image />
    </>
  )
}

export default HomePage
