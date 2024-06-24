import React, { useContext, useEffect, useState } from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import Zoom from 'react-medium-image-zoom'
import { StoreContext } from '../../Context/Context'


const Product = () => {


  const { basket, setBasket , getSinglePrudoct , product } = useContext(StoreContext)
  const { id } = useParams()
  const [ box, setBox ] = useState([])



  useEffect(() => {
      getSinglePrudoct(id)
    }, [])
    

  
    
  
  return (
    <div className='product'>
      <div className="container">
        <div className="product-container">
          <div className="prod-img-container">
            <Zoom>
              <img src={product.image} className="prod-img" />
            </Zoom>
          </div>
          <div className="category-container">
            <span className='category'>
              {product.category}
            </span>
            <span></span>
          </div>
          <div className="prod-tnp">
            <span className='prod-title'>{product.title}</span>
            <span className='prod-price'>${product.price}</span>
          </div>

          <p className="prod-desc">{product.description}</p>

          <div className="prod-button">
            <button onClick={() => setBasket(prev => ([...prev, product]))}>Add To Card</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product