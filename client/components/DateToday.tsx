export default function DateToday() {
  const currentDate = new Date()
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  const num = currentDate.getDate().toString().padStart(2, '0')
  const day = daysOfWeek[currentDate.getDay()]
  const month = months[currentDate.getMonth()]

  return (
    <>
      <div className="num">{num}</div>
      <div className="dateText">
        <div className="month">{month}</div>
        <div className="day">{day}</div>
      </div>
    </>
  )
}