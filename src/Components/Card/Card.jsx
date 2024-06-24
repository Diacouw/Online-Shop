import React, { useContext, useEffect, useState } from 'react'
import { Await, Link } from "react-router-dom"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import './Card.css'


const Card = ({ image, category, title, price, description, id }) => {     
    return (
        <div className='card'  >
            <div className="card-img">
                <Zoom>
                    <img className='img' src={image} alt="" />
                </Zoom>

            </div>
            <div className="card-info">
                <div className="card-category">
                    <p>{category}</p>
                </div>
                <div className="title-price">
                    <h3>{title}</h3>
                    <h4>${price}</h4>
                </div>
                <div className="description">
                    <p>{description.slice(0, 120)} ...</p>
                </div>
                <div className="buy">
                    <Link to={`/product-detail/${id}`} className='btn1
                    btn Link'>
                        See Product
                    </Link>

                    
                </div>
            </div>
        </div>
    )
}

export default Card