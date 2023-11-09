// import SelectDate from './SelectDate.tsx'
import Image from './Image.tsx'
import Affirmation from './Affirmation.tsx'
import DateToday from './DateToday.tsx'


function HomePage() {


  
  return (
    <div className='box'>
      <div className='content'>
        <div className='affirmation'>
          <Affirmation />
        </div>
        <div className='image'>
          <img src='https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='waterfall' className='waterfall'/>
          <Image />
        </div>
      </div>
      <div className='date'>
        <DateToday />
      </div>
    </div>
  )
}

export default HomePage
