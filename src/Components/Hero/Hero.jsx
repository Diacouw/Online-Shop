import React, { useContext, useEffect, useState } from 'react'
import './Hero.css'
import { StoreContext } from '../../Context/Context'
import Card from '../Card/Card'

const Hero = () => {

  const { allProducts } = useContext(StoreContext)
  

  return (
    <div className='hero'>
      <div className="container">
        <div className="see-some">
          <h3>See Some Products</h3>
          <span></span>
        </div>
        <div className="some-products">
          {allProducts.splice(0,8).map(product => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero