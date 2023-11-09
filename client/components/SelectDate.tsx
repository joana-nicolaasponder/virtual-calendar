// import React, { useState } from 'react'
// import DisplayDate from './DisplayDate'
// import { Link } from 'react-router-dom'

// const SelectDate = () => {
//   const [selectedDate, setSelectedDate] = useState('')
//   const [form, setForm] = useState([])

//   const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedDate(event.target.value)
//   }

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//   }

//   return (
//     <div>
//       <h2>Calendar</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="date">Select a Date:</label>
//         <input
//           type="date"
//           id="date"
//           name="date"
//           value={selectedDate}
//           onChange={handleDateChange}
//         />
//         <button>Submit</button>
//       </form>
//       <p>Selected Date: {selectedDate}</p>
//       <DisplayDate date={selectedDate} />
//     </div>
//   )
// }

// export default SelectDate
