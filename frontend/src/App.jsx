import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'
import CompletedPage from './pages/CompletedPage'
import AllTasksPage from './pages/AllTasksPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/completed-page' element={<CompletedPage />}></Route>
            <Route path='/all-tasks' element={<AllTasksPage />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
