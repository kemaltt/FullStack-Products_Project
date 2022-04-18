import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './pages/MainPage'
import AddProduct from './pages/AddProduct'
import DetailPage from './pages/DetailPage'
import UpdateProduct from './pages/UpdateProduct'
import ProductContextProvider from './context/ProductContext'

function App() {
  return (
    <>
      <ProductContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </>
  )
}

export default App
