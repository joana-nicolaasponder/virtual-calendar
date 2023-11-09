// import SelectDate from './SelectDate.tsx'

// import Weather from './Weather.tsx'
import Image from './Image.tsx'
import Affirmation from './Affirmation.tsx'
import DateToday from './DateToday.tsx'


function HomePage() {


  
  return (
    <div className='box'>
      <div className='content'>
        {/* <Weather /> */}
        <Affirmation />
      </div>
      <div className='image'>
        <Image />
      </div>
      <div className='date'>
        <DateToday />
      </div>
    </div>
  )
}

export default HomePage
