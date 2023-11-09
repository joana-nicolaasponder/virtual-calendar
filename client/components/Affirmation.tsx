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
      <h2>Affirmation</h2>
      <p>{affirmation?.affirmation}</p>
    </>
  )
}
