import React, { useContext, useEffect, useState } from 'react'
import './Category.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { StoreContext } from '../../Context/Context'
import Card from '../../Components/Card/Card'

const Category = () => {

  const { categorys , getSinglePrudoct } = useContext(StoreContext)

  const { category } = useParams()
  const [categoryProducts, setCategoryProducts] = useState([])


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(json => setCategoryProducts(json))
      .catch(error => console.error('Error fetching products:', error));
  }, [category]);





  return (
    <div className='category'>
      <div className="container">
        <div className="select-category">
          <p>All Categories</p>
          <ul>
            {categorys.map((categ) => (
              <li className={categ ===category ? 'selected-cat' : ''}>
                <Link className='Link' to={`/product/${categ}`}>
                  {categ}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        <div className="products-of-category">
          {categoryProducts.map(products => (
            <Card key={products.id} {...products} />
          ))}
        </div>


      </div>
    </div>
  )
}

export default Category