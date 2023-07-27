import React, { useContext } from 'react'
import './shop.css'
import { ShopContext } from '../../context/shop-context'


const Product = (props) => {

  const {addToCart, cartItems} = useContext(ShopContext);
  const { id, productName, price, productImage} = props.data

  const cartItemAmount = cartItems[id];

  return (
    <div className='product'>

      <img src={productImage} alt='productImage'/>
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>Rs.{price}</p>
      </div>
      <button className='addToCartButton' onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount>0 && <p>({cartItemAmount})</p>}
      </button>
    </div>
  )
}

export default Product