import React, { useEffect } from 'react'
import Weather from './Weather'
import Affirmation from './Affirmation'

interface Props {
  date: string
}
const DisplayDate = ({ date }: Props) => {
  return (
    <div>
      <div className="date">{date}</div>
    </div>
  )
}

export default DisplayDate
