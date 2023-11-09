import { useEffect, useState } from 'react'
import { getAffirmation } from '../affirmationApiClient'

interface AffirmationType {
  affirmation: string
}

export default function Affirmation() {
  const [affirmation, setAffirmation] = useState<AffirmationType | null>(null)

  async function fetchAffirmation() {
    const affirmationData = await getAffirmation()
    console.log(affirmationData)
    setAffirmation(affirmationData)
  }

  useEffect(() => {
    try {
      fetchAffirmation()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      {affirmation?.affirmation}The secret of success is to do the common thing uncommonly well.
    </>
  )
}
