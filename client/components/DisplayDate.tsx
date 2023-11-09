import React, { useEffect } from 'react'
import Weather from './Weather'
import Affirmation from './Affirmation'

interface Props {
  date: string
}
const DisplayDate = ({ date }: Props) => {
  return (
    <div>
      {date}
      <Weather />
      <Affirmation />
    </div>
  )
}

export default DisplayDate
