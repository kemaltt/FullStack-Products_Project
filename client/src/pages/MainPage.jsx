import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'

const MainPage=()=> {
  const { products } = useContext(ProductContext)
  const navigate = useNavigate()

  return (
     <>
    <Button onClick={() => navigate('/add')} > Add Product </Button> 
    <div className="products-container"> {
          products ?.map((el, idx) => (
            <ProductCard  
            key={idx} 
            productName={el.name} 
            productId={el.id}
            />
          ))
        } 
        </div> 
        </>
        )
}

export default MainPage