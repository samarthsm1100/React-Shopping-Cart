import React from 'react'
import Product from './product'
import { PRODUCTS } from '../../products'
import './shop.css'

const shop = () => {
  return (
    <div className='shop'>
        <div className='classTitle'>
            <h1>Samarth Shop</h1>
        </div>
        <div className='products'>
            {
                PRODUCTS.map((product) => <Product data={product}/>)
            }
        </div>
    </div>
  )
}

export default shop