import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            {/* <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route> */}
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
