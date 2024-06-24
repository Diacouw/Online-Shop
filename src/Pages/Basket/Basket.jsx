import React, { useContext, useState } from 'react'
import './Basket.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import { StoreContext } from '../../Context/Context'

const Basket = () => {

  const { lastBasket, setBasket } = useContext(StoreContext)


  const removeItemFromBasket = (item) => {
    setBasket(lastBasket.filter(baskitem => {
      return baskitem.id !== item.id
    }))
  }

  const emptyBasket = ()=>{
    setBasket([])
  }


  return (
    <div className='basket'>
      <div className="container">
        {
          !lastBasket.length ? (
            <div className='empty-basket'>
              <h3 >
                Your Basket Is Empty !
              </h3>
            </div>)
            :

            (
              <>
                {
                  lastBasket.map((item) => (
                    <div className="bakset-container" key={item.id}>
                      <div className="bakset-img-container">
                        <Zoom>

                          <img className='bas-img' src={item.image} alt="" />
                        </Zoom>
                      </div>
                      <div className="bakset-item-name-price">
                        <div className="basket-item-name">
                          {item.title}
                        </div>
                        <div className="basket-item-price">
                          price :  ${item.price}
                        </div>
                      </div>

                      <div className="basket-button-container">
                        <button className='basket-button'
                          onClick={() => removeItemFromBasket(item)}
                        >
                          Remove Item
                        </button>
                      </div>

                    </div>
                  ))
                }
              </>
            )
        }


        {
          lastBasket.length ? (
            <div className='basket-buttons'>
              <button className='bas-btn1'>Finalize the purchase</button>
              <button className='bas-btn2'
                onClick={()=>emptyBasket()}
              >Remove All Items</button>
            </div>
          )
            : ''
        }

      </div>
    </div>
  )
}

export default Basket