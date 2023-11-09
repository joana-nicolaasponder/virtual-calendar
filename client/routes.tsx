import { Route, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import DisplayDate from './components/DisplayDate'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    {/* {<Route path="/date" element={<DisplayDate />} />} */}
  </Route>
)
