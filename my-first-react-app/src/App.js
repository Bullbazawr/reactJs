import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'

function App() {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      text: 'какойто текст про продукт 1'
    },
    {
      id: 2,
      title: 'Product 2',
      text: 'какойто текст про продукт 2'
    },
    {
      id: 3,
      title: 'Product 3',
      text: 'какойто текст про продукт 3'
    }
  ]
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/products' element={<ProductList pages={products} />} />
          <Route path='/products/:id' element={<ProductDetails pages={products} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App