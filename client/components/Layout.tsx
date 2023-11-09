import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='container'>
      <main>
        <Outlet />
      </main>
      <div className='background-img'>
        <img src='../client/images/calendar.svg' alt='calendar' className='calendar'/>
      </div>
      
      <footer>
        <p>Copyright &copy; A Powerpuff (girls) Initiative</p>
        <img src='https://media.tenor.com/c0_cRbtSZYYAAAAC/the-powerpuff-girls-cartoon-network.gif' alt='powerpuff girls flying' width='40'/></footer>
    </div>
  )
}
