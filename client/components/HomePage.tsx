import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient.ts'
import { Link } from 'react-router-dom'
// import SelectDate from './SelectDate.tsx'


import Image from './Image.tsx'


function HomePage() {
  return (
    <>
      <div className="box">
       
        <Image  />
       
      </div>
    </>
  )
}

export default HomePage
