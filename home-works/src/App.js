import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './components/FourthHomeWork/HomePage'
import AboutPage from './components/FourthHomeWork/AboutPage'



function App() {
  const pages = [
    {
      id: 1,
      title: 'Home Page',
    },
    {
      id: 2,
      title: 'About Page',
    }
  ]
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage pages={pages} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
